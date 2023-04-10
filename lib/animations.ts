import { Transition } from 'framer-motion'

export const getSpringTransition = (
	damping: number = 7,
	stiffness: number = 40,
	delay: number = 0,
): Transition => {
	return {
		damping,
		stiffness,
		restDelta: 0.02,
		type: 'spring',
		delay,
	}
}

export const commonAnimations = {
	initial: 'off',
	animate: 'on',
	exit: 'off',
}
