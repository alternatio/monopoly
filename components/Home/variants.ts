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
	on: {
		overflow: 'hidden',
		minWidth: '100%',
		opacity: 1,
	},
	off: {
		overflow: 'hidden',
		minWidth: '100%',
		opacity: 0,
	}
}