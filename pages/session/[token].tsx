import {NextPage} from "next";
import {useRouter} from "next/router";
import Head from "next/head";
import {collection, deleteDoc, doc, onSnapshot} from "@firebase/firestore";
import {firebaseData} from "../../data/firebase";
import Wrapper from "../../components/Wrapper";
import {FC, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import style from '/styles/pages/Session.module.scss'
import NetworkErrorPopup from "../../components/NetworkErrorPopup";
import Header from "../../components/Header";
import Hamburger from "../../components/Hamburger";

interface sessionInterface {
	currentToken: string
}

const Session: NextPage<sessionInterface> = () => {
	const [networkError, handleNetworkError] = useState<boolean>(false)
	const [hamburgerIsOpen, handleHamburgerIsOpen] = useState<boolean>(false)
	const router = useRouter()

	const getToken = (): string => {
		if (typeof router.query.token === "string")
			return router.query.token
		return 'token error'
	}

	// refresh data
	onSnapshot(doc(collection(firebaseData, 'sessions'), getToken()), (sessions) => {
		// console.log(sessions.data())
		if (!sessions.data()) {
			handleNetworkError(true)
		} else {
			handleNetworkError(false)
		}
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
			<Wrapper>
				<AnimatePresence>
					{networkError &&
						<NetworkErrorPopup />
					}
				</AnimatePresence>
				<AnimatePresence>
					{hamburgerIsOpen &&
						<Hamburger endSession={endSession}/>
					}
				</AnimatePresence>
				<Header
					handleHamburgerIsOpen={handleHamburgerIsOpen}
					hamburgerIsOpen={hamburgerIsOpen}/>
				<main className={style.main}>
					<header className={style.header}>
						Monopoly<span className={style.accent}>*</span>
					</header>

				</main>
			</Wrapper>
		</>
	)
}

export default Session