import style from "/styles/components/Header.module.scss";
import React, {FC} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Hamburger from "./Hamburger";

interface HeaderInterface {
	handleHamburgerIsOpen: Function
	hamburgerIsOpen: boolean
	endSession: Function
}

const Header: FC<HeaderInterface> = (props) => {
	return (
		<header className={style.header}>
			<motion.button
				animate={props.hamburgerIsOpen ?
						{border: '#000 solid .05rem'} :
						{border: 'transparent solid .05rem'}}
				className={style.hamburgerButton}
				onClick={() => props.handleHamburgerIsOpen(!props.hamburgerIsOpen)}>
				<motion.div
					animate={props.hamburgerIsOpen ?
						{rotate: '45deg', top: '50%', y: '-50%'} :
						{rotate: '0deg', top: '1rem', y: '0%'}}
					transition={{duration: .4}}
				/>
				<motion.div
					animate={props.hamburgerIsOpen ?
						{width: '0rem'} :
						{width: 'calc(100% - 1.5rem)'}}
					transition={{duration: .4}}
				/>
				<motion.div
					animate={props.hamburgerIsOpen ?
						{rotate: '-45deg', top: '50%', y: '-50%'} :
						{rotate: '0deg', top: '1.7rem', y: '0%'}}
					transition={{duration: .4}}
				/>
			</motion.button>
			<AnimatePresence>
				{props.hamburgerIsOpen &&
          <Hamburger endSession={props.endSession} />
				}
			</AnimatePresence>
		</header>
	)
}

export default React.memo(Header)