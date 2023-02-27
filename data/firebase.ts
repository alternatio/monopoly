import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"
import { GoogleAuthProvider } from '@firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyCsK10Xgy2ShyoPR8AWPGHyvdGbXoo456s",
	authDomain: "monopoly-alt.firebaseapp.com",
	projectId: "monopoly-alt",
	storageBucket: "monopoly-alt.appspot.com",
	messagingSenderId: "779907278513",
	appId: "1:779907278513:web:407e41f968c673c0966490"
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider()