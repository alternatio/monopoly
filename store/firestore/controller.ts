import { addDoc, collection, doc, getDoc, setDoc } from '@firebase/firestore'
import { db, googleAuthProvider } from '@/store/firestore/index'
import { getAuth, signInWithPopup, signOut } from '@firebase/auth'
import { userDataI } from '@/store/interfaces/user'
import {useAppDispatch} from "@/store/index";
import {setUserData} from "@/store/reducers/user";

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

// sign in app with Google
export const signInWithGooglePopup = async (
	setUserData: CallableFunction
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
		await setItemInFirestore('users', user.uid, userObject)
		setUserData(userObject)
		localStorage.setItem('userData', JSON.stringify(userObject))
	} catch (error) {
		console.error(error)
	}
}

// sign out in app with Google
export const signOutWithGooglePopup = async (
	setUserData: CallableFunction
) => {
	const auth = getAuth()

	try {
		await signOut(auth)
		setUserData({})
		localStorage.removeItem('userData')
	} catch (error) {
		console.log(error)
	}
}