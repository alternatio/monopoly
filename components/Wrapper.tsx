import { motion } from "framer-motion";
import {FC, ReactNode} from "react";
import style from '/styles/components/wrapper.module.scss'

interface WrapperInterface {
	isDarkTheme: boolean
	children?: ReactNode
}

const Wrapper: FC<WrapperInterface> = (props) => {
	return (
		<motion.div
			animate={props.isDarkTheme ?
				{filter: 'invert(1)'} :
				{filter: 'invert(0)'}}
			className={style.wrapper}>
			<div className={style.container}>
				{props.children}
			</div>
		</motion.div>
	)
}

export default Wrapper