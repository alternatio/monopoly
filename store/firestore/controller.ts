import { addDoc, collection, doc, getDoc, setDoc } from '@firebase/firestore'
import { db, googleAuthProvider } from '@/store/firestore/index'
import { getAuth, signInWithPopup, signOut } from '@firebase/auth'
import {
	getInitialUserGameData,
	userDataI,
	userI,
} from '@/store/interfaces/user'
import { createUID } from '@/lib/commonFunctions'
import { sessionI } from '@/store/interfaces/session'
import { messageI } from '@/store/interfaces/message'

// get doc in firestore
export const getDocInFirestore = async (
	collectionName: string,
	docName: string
) => {
	return await getDoc(doc(db, collectionName, docName))
}

// add item in firestore
export const addItemInFirestore = async (
	collectionName: string,
	data: object
) => {
	await addDoc(collection(db, collectionName), data)
}

// set item in firestore
export const setItemInFirestore = async (
	collectionName: string,
	docName: string,
	data: object
) => {
	await setDoc(doc(db, collectionName, docName), data)
}

export const createSession = async (
	owner: userDataI,
	maxPlayers: number,
	password: string
) => {
	const id = createUID()
	const response = await getDocInFirestore('sessions', id)

	console.log(response)

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
		}

		setItemInFirestore('sessions', id, sessionData)

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
			gameData: getInitialUserGameData(
				userData,
				preparedResponse.players.length
			),
		})
		setItemInFirestore('sessions', sessionId, tempSessionData)
		return true
	}

	if (!preparedResponse) return
	if (preparedResponse.players.find(player => player.data.uid === userData.uid))
		return
	if (preparedResponse.players.length >= preparedResponse.maxPlayers) return
	if (preparedResponse.password) {
		if (preparedResponse.password !== password) return
		return addPlayer(preparedResponse)
	} else {
		return addPlayer(preparedResponse)
	}
}

// push message
export const pushMessage = async (sessionId: string, message: messageI) => {
	const response = await getDocInFirestore('sessions', sessionId)
	const preparedResponse = response.data() as sessionI | undefined

	if (!preparedResponse) return
	if (preparedResponse?.messages) {
		preparedResponse.messages.push(message)
	} else {
		preparedResponse.messages = [message]
	}
	setItemInFirestore('sessions', sessionId, preparedResponse)
}

// make a move
export const makeMove = async (
	sessionId: string,
	player: userI,
	length: number
) => {
	const response = await getDocInFirestore('sessions', sessionId)
	const preparedResponse = response.data() as sessionI | undefined

	if (preparedResponse) {
		const foundPlayerIndex = preparedResponse.players.findIndex(
			playerInSession => playerInSession.data.email === player.data.email
		)
		if (foundPlayerIndex < 0) return
		preparedResponse.players[foundPlayerIndex].gameData.position += length
		setItemInFirestore('sessions', sessionId, preparedResponse)
	}
}

// change turn player
export const changeTurnPlayer = async (sessionId: string) => {
	const response = await getDocInFirestore('sessions', sessionId)
	const preparedResponse = response.data() as sessionI | undefined

	if (preparedResponse) {
		if (preparedResponse.playerTurn < preparedResponse.players.length - 1) {
			preparedResponse.playerTurn += 1
		} else {
			preparedResponse.playerTurn = 0
		}
		setItemInFirestore('sessions', sessionId, preparedResponse)
	}
}

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
