import { motion } from "framer-motion";
import React, {FC} from "react";
import style from "/styles/components/Hamburger.module.scss";

interface HamburgerInterface {
	endSession: Function
}

const Hamburger: FC<HamburgerInterface> = (props) => {
	return (
		<motion.div
			initial={{x: '-120%'}}
			animate={{x: '0'}}
			exit={{x: '-120%'}}
			transition={{duration: .6}}
			className={style.hamburger}>
			<button
				onClick={() => props.endSession()}
				className={style.buttonRed}>
				Удалить сессию
			</button>
		</motion.div>
	)
}

export default React.memo(Hamburger)