import { motion } from 'framer-motion'
import { FC, memo, ReactNode } from 'react'
import style from './Wrapper.module.scss'

interface WrapperProps {
	maxWidth: string
	children?: ReactNode
}

const Wrapper: FC<WrapperProps> = props => {
	return (
		<motion.div className={style.wrapper}>
			<div className={style.scroller}></div>
			<div
				style={{ width: `min(100%, ${props.maxWidth})` }}
				className={style.innerWrapper}>
				{props.children}
			</div>
		</motion.div>
	)
}

Wrapper.displayName = 'Wrapper'
export default memo(Wrapper)
