'use client'

import { FC, memo, useState } from 'react'
import style from './Questions.module.scss'
import { motion } from 'framer-motion'
import { buttonQuestionsVariants } from '@/components/Home/variants'
import { commonAnimations, getSpringTransition } from '@/lib/animations'

const Questions: FC = () => {
	const [question, setQuestion] = useState(0)

	const buttons = ['Правила', 'О создателе']

	return (
		<div className={style.questions}>
			<div className={style.top}>
				<div className={style.buttons}>
					{buttons.map((value, index) => {
						return <Button value={value} index={index} />
					})}
				</div>
			</div>
		</div>
	)
}

interface ButtonI {
	value: string
	index: number
}

const Button: FC<ButtonI> = props => {
	const [mouseEnter, handleMouseEnter] = useState(false)

	return (
		<button
			onMouseEnter={() => handleMouseEnter(true)}
			onMouseLeave={() => handleMouseEnter(false)}
			className={style.button}>
			<span className={style.buttonText}>
				{props.value}
			</span>
			{mouseEnter && (
				<motion.div
					// variants={buttonQuestionsVariants}
					// initial={'off'}
					// animate={'on'}
					// exit={'off'}
					className={style.buttonBackground} layoutId={'button'} />
			)}
		</button>
	)
}

export default memo(Questions)
