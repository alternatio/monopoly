import { addDoc, collection, doc, getDoc, setDoc } from '@firebase/firestore'
import { db, googleAuthProvider } from '@/store/firestore/index'
import { getAuth, signInWithPopup, signOut } from '@firebase/auth'
import { userDataI } from '@/store/interfaces/user'
import { createUID } from '@/lib/commonFunctions'
import { sessionI } from '@/store/interfaces/session'

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
	password: string,
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
			players: [owner],
			owner,
			timeStart: date.getTime()
		}

		setItemInFirestore('sessions', id, sessionData)

		return true
	} else {
		return false
	}
}

// sign in app with Google
export const signInWithGooglePopup = async (setUserData: CallableFunction) => {
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
export const signOutWithGooglePopup = async (setUserData: CallableFunction) => {
	const auth = getAuth()

	try {
		await signOut(auth)
		setUserData(undefined)
		localStorage.removeItem('userData')
	} catch (error) {
		console.log(error)
	}
}