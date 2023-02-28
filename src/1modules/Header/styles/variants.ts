import { Transition, Variants } from 'framer-motion'

export const headerV: Variants = {
	off: {
		y: '-100%',
		// scaleX: .95,
		backdropFilter: 'blur(0rem)',
		background: '#fff0',
	},
	on: {
		y: '0%',
		// scaleX: 1,
		backdropFilter: 'blur(.2rem)',
		background: '#fff8',
	}
}

export const headerT: Transition = {
	damping: 7,
	stiffness: 40,
	type: 'spring'
}
