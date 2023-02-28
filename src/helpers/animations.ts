import { Transition } from 'framer-motion'
import { cubicBezier } from '@motionone/easing'

export const getTransition = (
	damping: number = 10,
	stiffness: number = 10,
	delay: number = 0,
	repeat: number = 0,
	repeatType:
		| 'loop'
		| 'reverse'
		| 'mirror'
		| undefined = undefined
): Transition => {
	return {
		damping,
		stiffness,
		restDelta: 0.02,
		delay,
		repeat,
		repeatType,
	}
}

export const commonTransition: Transition = {
	duration: 2,
	// type: cubicBezier(0.35, 0.35, 0.2, 1),
}

export const commonAnimations = {
	initial: 'off',
	animate: 'on',
	exit: 'off',
}
