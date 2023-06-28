import { Variants } from 'framer-motion'

export const wrapperV: Variants = {
	on: {
		opacity: 1,
		backdropFilter: 'blur(0.2rem)',
	},
	off: {
		opacity: 0,
		backdropFilter: 'blur(0)',
	},
}

export const miniPopupV: Variants = {
	on: {
		marginTop: '.5rem',
		transform: 'translateY(0rem)',
		height: 'auto',
	},
	off: {
		marginTop: '0rem',
		transform: 'translateY(-1rem)',
		height: 0,
	},
}
