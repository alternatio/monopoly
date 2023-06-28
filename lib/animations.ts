import { EasingDefinition, Transition } from 'framer-motion'

type repeatTypeI = 'loop' | 'reverse' | 'mirror' | undefined

export const getSpringTransition = (
	damping: number = 7,
	stiffness: number = 40,
	delay: number = 0,
	repeat: number = 0,
	repeatType: repeatTypeI = undefined,
	restDelta: number = 0.02
): Transition => {
	return {
		damping,
		stiffness,
		restDelta,
		type: 'spring',
		delay,
		repeat,
		repeatType,
	}
}

export const getEaseTransition = (
	duration: number = 0.5,
	ease: EasingDefinition = "easeInOut",
	delay: number = 0
): Transition => {
	return {
		duration,
		delay,
		ease,
	}
}

export const commonAnimations = {
	initial: 'off',
	animate: 'on',
	exit: 'off',
}
