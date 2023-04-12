import { Transition } from 'framer-motion'

type repeatTypeI = 'loop' | 'reverse' | 'mirror' | undefined

export const getSpringTransition = (
	damping: number = 7,
	stiffness: number = 40,
	delay: number = 0,
	repeat: number = 0,
	repeatType: repeatTypeI = undefined
): Transition => {
	return {
		damping,
		stiffness,
		restDelta: 0.02,
		type: 'spring',
		delay,
		repeat,
		repeatType,
	}
}

export const commonAnimations = {
	initial: 'off',
	animate: 'on',
	exit: 'off',
}
