'use client'

import { AnimatePresence, motion, Variants } from 'framer-motion'
import { FC, memo, useEffect, useState } from 'react'
import style from './TypingText.module.scss'

interface TypingTextI extends Partial<HTMLDivElement> {
	text: string
	delay: number
	charWidth?: string
	readyDelay?: number
	charClassName?: string
}

const TypingText: FC<TypingTextI> = props => {
	const [currentText, setCurrentText] = useState('')
	const [isReady, handleReady] = useState(false)

	useEffect(() => {
		handleReady(false)
		setCurrentText(props.text)
		setTimeout(() => handleReady(true), props.readyDelay ? props.readyDelay : 300)
	}, [props.text, props.delay])

	const containerV = {
		show: {
			transition: {
				staggerChildren: props.delay,
				delayChildren: 0.25,
			},
		},
	}

	const charV: Variants = {
		show: {
			opacity: 1,
			y: '0rem',
			width: props.charWidth ? props.charWidth : '.6em',
		},
		hidden: {
			opacity: 0,
			y: '-1em',
			width: 0
		},
		close: {
			opacity: 0,
			width: 0,
		}
	}

	return (
		<AnimatePresence>
			{isReady && (
				<motion.div
					layout={true}
					className={`${style.container} ${props.className}`}
					variants={containerV}
					initial='hidden'
					animate='show' exit='close'>
					{currentText.split('').map((char, index) => (
						<motion.span className={`${style.char} ${props.charClassName}`} key={index} variants={charV}>
							{char}
						</motion.span>
					))}
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default memo(TypingText)
