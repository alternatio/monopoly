import { Transition } from 'framer-motion'
import { cubicBezier } from '@motionone/easing'

export const getSpringTransition = (
	damping: number = 7,
	stiffness: number = 40,
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
		type: 'spring',
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
