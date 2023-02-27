import { Transition } from 'framer-motion'
import { cubicBezier } from '@motionone/easing'

export const getTransition = (
	duration: number = 0.33,
	delay: number = 0,
	repeat: number = 0,
	repeatType:
		| 'loop'
		| 'reverse'
		| 'mirror'
		| undefined = undefined
): Transition => {
	return {
		duration,
		delay,
		type: cubicBezier(0.35, 0.35, 0.2, 1),
		repeat,
		repeatType,
	}
}

export const commonAnimations = {
	initial: 'off',
	animate: 'on',
	exit: 'off',
}
