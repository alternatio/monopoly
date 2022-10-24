import { motion } from "framer-motion";
import React, {FC} from "react";
import style from "/styles/components/Hamburger.module.scss";

interface HamburgerInterface {
	endSession: Function
	handleIsDarkTheme: Function
	isDarkTheme: boolean
}

const Hamburger: FC<HamburgerInterface> = (props) => {
	return (
		<motion.div
			initial={{y: '-110vh'}}
			animate={{y: '0'}}
			exit={{y: '-110vh'}}
			transition={{duration: .6}}
			className={style.hamburger}>
			<button onClick={() => props.handleIsDarkTheme(!props.isDarkTheme)}
				className={style.themeButton}>
				Переключить тему
			</button>
			<button
				onClick={() => props.endSession()}
				className={style.buttonRed}>
				Удалить сессию
			</button>
		</motion.div>
	)
}

export default React.memo(Hamburger)