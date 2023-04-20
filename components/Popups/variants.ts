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
