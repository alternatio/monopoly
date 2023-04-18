import { AnimatePresence, motion } from 'framer-motion'
import { FC, memo, ReactNode } from 'react'
import style from './Questions.module.scss'
import { commonAnimations, getSpringTransition } from '@/lib/animations'
import { questionVariants } from '@/components/Home/variants'

interface QuestionWrapperI {
	children: ReactNode
	index: number
	isVisible: boolean
}

const QuestionWrapper: FC<QuestionWrapperI> = props => {
	return (
		// <AnimatePresence>
		// 	{props.isVisible && (
		// 		<motion.div
		// 			custom={props.index}
		// 			variants={questionVariants}
		// 			{...commonAnimations}
		// 			transition={getSpringTransition(20, 60)}
		// 			className={style.wrapper}>
		// 			{props.children}
		// 		</motion.div>
		// 	)}
		// </AnimatePresence>
		<div data-is-visible={props.isVisible}
			className={style.wrapper}>
			{props.children}
		</div>
	)
}

export default memo(QuestionWrapper)
