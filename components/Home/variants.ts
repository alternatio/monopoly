import { Variants } from 'framer-motion'

export const headerVariants: Variants = {
	on: {
		y: '0',
	},
	off: {
		y: '-150%',
	},
}

export const buttonQuestionsVariants: Variants = {
	on: {
		scaleY: 1,
	},
	off: {
		scaleY: 2.5,
	},
}

export const questionVariants: Variants = {
	on: custom => ({
		opacity: 1,
		x: `-${custom * 100}%`
	}),
	off: custom => ({
		opacity: 0,
		x: 0
	}),
}