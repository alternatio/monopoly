'use client'

import { Dispatch, FC, memo, SetStateAction, useState } from 'react'
import style from './Questions.module.scss'
import { motion } from 'framer-motion'
import { buttonQuestionsVariants } from '@/components/Home/variants'
import { commonAnimations, getSpringTransition } from '@/lib/animations'

const Questions: FC = () => {
	const [question, setQuestion] = useState(0)

	const buttons = ['Правила', 'О создателе']
	const types = ['Rules', 'About Creator']

	return (
		<div className={style.questions}>
			<div className={style.top}>
				<div className={style.buttons}>
					{buttons.map((value, index) => {
						return <Button value={value} index={index} question={question} setQuestion={setQuestion} />
					})}
				</div>
				<span className={style.type}>{types[question]}</span>
			</div>
			<main className={style.main}>

			</main>
		</div>
	)
}

interface ButtonI {
	value: string
	index: number
	question: number
	setQuestion: Dispatch<SetStateAction<number>>
}

const Button: FC<ButtonI> = props => {
	return (
		<button
			onClick={() => props.setQuestion(props.index)}
			className={style.button}>
			<span
				data-is-active={props.question === props.index}
				className={style.buttonText}>
				{props.value}
			</span>
			{props.question === props.index && (
				<motion.div
					variants={buttonQuestionsVariants}
					{...commonAnimations}
					transition={getSpringTransition(20, 100)}
					className={style.buttonBackground} layoutId={'button'} />
			)}
		</button>
	)
}

export default memo(Questions)
