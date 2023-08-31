import { addDoc, collection, doc, getDoc, setDoc } from '@firebase/firestore'
import { db, googleAuthProvider } from '@/store/firestore/index'
import { getAuth, signInWithPopup, signOut } from '@firebase/auth'
import { getInitialUserGameData, userDataI, userI } from '@/store/interfaces/user'
import { createUID } from '@/lib/commonFunctions'
import { sessionI } from '@/store/interfaces/session'
import { messageI } from '@/store/interfaces/message'
import { diceResultI } from '@/store/interfaces/dice'

// - - - main or initial functions - - -
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

// - - - session functions - - -
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
		playerInSession => playerInSession?.data?.email === player.data?.email
	)
	if (foundPlayerIndex === undefined || foundPlayerIndex < 0) {
		console.error('makeMove error')
		return
	}

	const playerToUpdate = preparedSessionData?.players[foundPlayerIndex]?.gameData
	if (playerToUpdate && playerToUpdate.position) {
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
export const changeTurnPlayer = async (sessionData: Partial<sessionI>, isLocal?: boolean) => {
	const preparedSessionData: Partial<sessionI> = JSON.parse(JSON.stringify(sessionData))

	if (
		!preparedSessionData.players ||
		preparedSessionData.playerTurn === undefined ||
		!preparedSessionData.id
	) {
		console.error('changeTurnPlayer error')
		return
	}

	if (preparedSessionData.playerTurn < preparedSessionData.players.length - 1) {
		preparedSessionData.playerTurn += 1
	} else {
		preparedSessionData.playerTurn = 0
	}
	if (!isLocal) await setItemInFirestore('sessions', preparedSessionData.id, preparedSessionData)
	else return preparedSessionData
}

// make a move and push message and check double
export const makeMoveAndPushMessageAndCheckDouble = async (
	sessionData: Partial<sessionI>,
	player: userI,
	diceResult: diceResultI
) => {
	let preparedSessionData = await makeMove(sessionData, player, diceResult.totalResultOfDices, true)
	if (!preparedSessionData || !player.gameData?.name) {
		console.error('makeMoveAndPushMessage error')
		return
	}

	const message: messageI = {
		author: player.gameData?.name,
		color: player.gameData.color.hex,
		body: `Выпало ${diceResult.totalResultOfDices} (${diceResult.dicesResult.join(' — ')}), это ${
			preparedSessionData.totalMoves
		} общий ход. ${diceResult.double ? 'Ого, это дубль!' : ''}`,
		system: true,
	}

	if (!diceResult.double) {
		preparedSessionData = await pushMessage(preparedSessionData, message, true)
		if (!preparedSessionData || !player.gameData?.name) {
			console.error('makeMoveAndPushMessage error')
			return
		}
		await changeTurnPlayer(preparedSessionData)
	} else {
		await pushMessage(preparedSessionData, message)
	}
}
// - - - - - -

// - - - utility functions - - -
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
