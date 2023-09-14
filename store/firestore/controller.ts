import { addDoc, collection, doc, getDoc, setDoc } from '@firebase/firestore'
import { db, googleAuthProvider } from '@/store/firestore/index'
import { getAuth, signInWithPopup, signOut } from '@firebase/auth'
import { getInitialUserGameData, userDataI, userI } from '@/store/interfaces/user'
import { createUID } from '@/lib/commonFunctions'
import { sessionI } from '@/store/interfaces/session'
import { messageI } from '@/store/interfaces/message'
import { diceResultI } from '@/store/interfaces/dice'
import { sessionReducerI } from '@/store/reducers/session'
import { getCellName } from '@/lib/sessionFunctions'

// - - - MAIN OR INITIAL FUNCTIONS - - -
// get doc in firestore
export const getDocInFirestore = async (collectionName: string, docName: string) => {
	return await getDoc(doc(db, collectionName, docName))
}

// add item in firestore
export const addItemInFirestore = async (collectionName: string, data: object) => {
	await addDoc(collection(db, collectionName), data)
}

// set item in firestore
export const setItemInFirestore = async (collectionName: string, docName: string, data: object) => {
	await setDoc(doc(db, collectionName, docName), data)
}

export const createSession = async (owner: userDataI, maxPlayers: number, password: string) => {
	const id = createUID()
	const response = await getDocInFirestore('sessions', id)

	if (!response.data()) {
		const date = new Date()
		const sessionData: sessionI = {
			id,
			password,
			maxPlayers,
			players: [
				{
					data: owner,
					gameData: getInitialUserGameData(owner, 0),
				},
			],
			owner,
			timeStart: date.getTime(),
			timeEnd: false,
			winner: false,
			messages: [],
			playerTurn: 0,
			totalMoves: 0,
			playerCanAct: false,
			isDouble: false,
		}

		await setItemInFirestore('sessions', id, sessionData)

		return id
	} else {
		return false
	}
}

// add new player
export const addPlayerInSession = async (
	sessionId: string,
	userData: userDataI,
	password?: string
) => {
	const response = await getDocInFirestore('sessions', sessionId)
	const preparedResponse = response.data() as sessionI | undefined

	const addPlayer = (preparedResponse: sessionI) => {
		const tempSessionData: sessionI = { ...preparedResponse }
		tempSessionData.players.push({
			data: userData,
			gameData: getInitialUserGameData(userData, preparedResponse.players.length),
		})
		setItemInFirestore('sessions', sessionId, tempSessionData)
		return true
	}

	if (!preparedResponse) return
	if (preparedResponse.players.find(player => player.data?.uid === userData.uid)) return
	if (preparedResponse.players.length >= preparedResponse.maxPlayers) return
	if (preparedResponse.password) {
		if (preparedResponse.password !== password) return
		return addPlayer(preparedResponse)
	} else {
		return addPlayer(preparedResponse)
	}
}
// - - - - - -

// - - - SESSION FUNCTIONS - - -
// push message
export const pushMessage = async (
	sessionData: Partial<sessionI>,
	message: messageI,
	isLocal?: boolean
) => {
	const preparedSessionData: Partial<sessionI> = JSON.parse(JSON.stringify(sessionData))

	if (!preparedSessionData.id) {
		console.error('pushMessage error')
		return
	}
	if (preparedSessionData.messages?.length) {
		preparedSessionData.messages.push(message)
	} else {
		preparedSessionData.messages = [message]
	}
	if (!isLocal) await setItemInFirestore('sessions', preparedSessionData.id, preparedSessionData)
	else return preparedSessionData
}

// make a move
export const makeMove = async (
	sessionData: Partial<sessionI>,
	player: userI,
	length: number,
	isLocal?: boolean
) => {
	const preparedSessionData: Partial<sessionI> = JSON.parse(JSON.stringify(sessionData))

	if (
		!preparedSessionData.players ||
		!(preparedSessionData.totalMoves !== undefined && preparedSessionData.totalMoves >= 0) ||
		!preparedSessionData.id
	) {
		console.error('makeMove error')
		return
	}

	const foundPlayerIndex = preparedSessionData?.players?.findIndex(
		playerInSession => playerInSession?.data?.uid === player.data?.uid
	)
	if (foundPlayerIndex === undefined || foundPlayerIndex < 0) {
		console.error('makeMove error')
		return
	}

	const playerToUpdate = preparedSessionData?.players[foundPlayerIndex]?.gameData
	if (playerToUpdate && playerToUpdate.position !== undefined) {
		playerToUpdate.position += length
		preparedSessionData.totalMoves += 1
		if (!isLocal) await setItemInFirestore('sessions', preparedSessionData.id, preparedSessionData)
		else return preparedSessionData
	} else {
		console.error('makeMove error')
		return
	}
}

// change turn player
export const changeTurnPlayer = async (
	sessionData: Partial<sessionI>,
	isLocal?: boolean,
	isDouble?: boolean
) => {
	const preparedSessionData: Partial<sessionI> = JSON.parse(JSON.stringify(sessionData))

	if (
		!preparedSessionData.players ||
		preparedSessionData.playerTurn === undefined ||
		!preparedSessionData.id
	) {
		console.error('changeTurnPlayer error')
		return
	}

	if (!isDouble) {
		if (preparedSessionData.playerTurn < preparedSessionData.players.length - 1) {
			preparedSessionData.playerTurn += 1
		} else {
			preparedSessionData.playerTurn = 0
		}
	}
	preparedSessionData.playerCanAct = false
	if (!isLocal) await setItemInFirestore('sessions', preparedSessionData.id, preparedSessionData)
	else return preparedSessionData
}

// make a move (or / and) push message (or / and) change turn player or other
interface functionalI {
	pushMessage?: true
	changePlayerTurn?: true
}

export const makeMoveFunctional = async (
	sessionData: Partial<sessionReducerI>,
	player: userI,
	diceResult: diceResultI,
	functional: functionalI,
	onComplete?: () => void
) => {
	const consoleError = () => console.error('makeMoveAndPushMessage error')
	if (!sessionData.sessionDataStore) return consoleError()
	let preparedSessionData = await makeMove(
		sessionData.sessionDataStore,
		player,
		diceResult.totalResultOfDices,
		true
	)

	// push system message
	if (functional.pushMessage) {
		// TODO: доделать этот кал, чтобы нормально было, сообщения чтобы читались людьми
		if (!preparedSessionData || !player.gameData?.name || !sessionData.cells) return consoleError()

		const texts = {
			moves: `Выпало ${diceResult.totalResultOfDices} (${diceResult.dicesResult.join(' + ')})`,
			totalMoves: `${preparedSessionData.totalMoves} общих ходов.`,
			isDouble: `${diceResult.double ? 'Ого, это дубль!' : ''}`,
			position: `В итоге ${player.data?.name} попадает на поле "${getCellName(
				sessionData,
				player.gameData.position + diceResult.totalResultOfDices
			)}"`,
		}

		const body = `${texts.moves} ${texts.totalMoves} ${texts.isDouble} ${texts.position}`

		const message: messageI = {
			author: player.gameData?.name,
			color: player.gameData.color.hex,
			body,
			system: true,
		}
		preparedSessionData = await pushMessage(preparedSessionData, message, true)
	}

	// change player turn
	if (functional.changePlayerTurn) {
		if (!preparedSessionData) return consoleError()
		preparedSessionData = await changeTurnPlayer(preparedSessionData, true)
	}

	// output
	if (!preparedSessionData?.id) return consoleError()
	if (!functional.changePlayerTurn) {
		preparedSessionData.playerCanAct = true
		diceResult.double
			? (preparedSessionData.isDouble = true)
			: (preparedSessionData.isDouble = false)
	}
	await setItemInFirestore('sessions', preparedSessionData.id, preparedSessionData)
	onComplete && onComplete()
	return true
}

// kick player
export const kickPlayer = async (sessionData: Partial<sessionI>, currentPlayer: userI) => {
	const consoleError = () => console.error('kickPlayer error')
	let preparedSessionData: Partial<sessionI> | undefined = JSON.parse(JSON.stringify(sessionData))

	const playerIndex = preparedSessionData?.players?.findIndex(
		player => player.data?.uid === currentPlayer.data?.uid
	)
	console.log(playerIndex, preparedSessionData?.players?.length)
	if (playerIndex === undefined || playerIndex < 0 || !preparedSessionData?.players?.length)
		return consoleError()
	if (preparedSessionData?.playerTurn === playerIndex) {
		preparedSessionData = await changeTurnPlayer(preparedSessionData, true)
	}
	preparedSessionData?.players?.splice(playerIndex, 1)
	if (!preparedSessionData?.id) return consoleError()
	await setItemInFirestore('sessions', preparedSessionData.id, preparedSessionData)
}

// - - - - - -

// - - - UTILITY FUNCTIONS - - -
// sign in app with Google
export const signInWithGooglePopup = async (
	setUserData: (userData: userDataI | undefined) => void
) => {
	const auth = getAuth()

	try {
		const response = await signInWithPopup(auth, googleAuthProvider)
		const user = response.user
		const userObject: userDataI = {
			uid: user.uid,
			name: user.displayName,
			email: user.email,
			avatar: user.photoURL,
		}
		if (!user.email) return
		await setItemInFirestore('users', user.email, userObject)
		setUserData(userObject)
		localStorage.setItem('userData', JSON.stringify(userObject))
	} catch (error) {
		console.error(error)
	}
}

// sign out in app with Google
export const signOutWithGooglePopup = async (
	setUserData: (userData: userDataI | undefined) => void
) => {
	const auth = getAuth()

	try {
		await signOut(auth)
		setUserData(undefined)
		localStorage.removeItem('userData')
	} catch (error) {
		console.log(error)
	}
}
// - - - - - -
