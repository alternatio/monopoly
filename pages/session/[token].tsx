import {NextPage} from "next";
import {useRouter} from "next/router";
import Head from "next/head";
import {collection, deleteDoc, doc, onSnapshot} from "@firebase/firestore";
import {firebaseData} from "../../data/firebase";
import Wrapper from "../../components/Wrapper";
import {useEffect, useState} from "react";
import {AnimatePresence} from "framer-motion";
import style from '/styles/pages/Session.module.scss'
import NetworkErrorPopup from "../../components/NetworkErrorPopup";
import Header from "../../components/Header";
import Field from "../../components/Field";
import GetNamePopup from "../../components/GetNamePopup";

interface sessionInterface {
	currentToken: string
}

const Session: NextPage<sessionInterface> = () => {
	const [networkError, handleNetworkError] = useState<boolean>(false)
	const [hamburgerIsOpen, handleHamburgerIsOpen] = useState<boolean>(false)
	const [isDarkTheme, handleIsDarkTheme] = useState<boolean>(false)
	// TODO: true to false
	const [nameIsTaken, handleNameIsTaken] = useState<boolean>(true)
	const router = useRouter()

	const getToken = (): string => {
		if (typeof router.query.token === "string")
			return router.query.token
		return 'token error'
	}

	const toggleDarkTheme = () => {
		localStorage.setItem('isDarkTheme', JSON.stringify(!isDarkTheme))
		console.log(!isDarkTheme, localStorage.getItem('isDarkTheme'))
		handleIsDarkTheme(!isDarkTheme)
	}

	// local storage get
	useEffect(() => {
		const keyOfDarkTheme = 'isDarkTheme'
		console.log(localStorage.getItem(keyOfDarkTheme))
		if (localStorage.getItem(keyOfDarkTheme)) {
			// @ts-ignore
			handleIsDarkTheme(JSON.parse(localStorage.getItem(keyOfDarkTheme)))
		}
	}, [])

	// refresh firestore data
	onSnapshot(doc(collection(firebaseData, 'sessions'), getToken()), (sessions) => {
		console.log(sessions.data())
		if (!sessions.data()) {
			handleNetworkError(true)
		} else {
			handleNetworkError(false)
		}
	}, () => {
		handleNetworkError(true)
	})

	const endSession = () => {
		deleteDoc(doc(collection(firebaseData, 'sessions'), getToken()))
	}

	return (
		<>
			<Head>
				<title>
					Session
				</title>
			</Head>
			<Wrapper isDarkTheme={isDarkTheme}>

				<AnimatePresence>
					{networkError &&
						<NetworkErrorPopup />}
				</AnimatePresence>
				<AnimatePresence>
					{!nameIsTaken &&
						<GetNamePopup handleNameIsTaken={handleNameIsTaken}/>}
				</AnimatePresence>

				<Header
					toggleDarkTheme={toggleDarkTheme}
					endSession={endSession}
					handleHamburgerIsOpen={handleHamburgerIsOpen}
					hamburgerIsOpen={hamburgerIsOpen}/>
				<main className={style.main}>
					<header className={style.header}>
						Monopoly<span className={style.accent}>*</span>
					</header>
					<div className={style.content}>
						<Field getToken={getToken}/>
					</div>
				</main>
			</Wrapper>
		</>
	)
}

export default Session