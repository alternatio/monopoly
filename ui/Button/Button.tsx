'use client'

import { FC, memo, ReactNode } from 'react'
import style from './styles/Button.module.scss'

interface ButtonProps {
	children?: ReactNode
	className?: string
	onClick?: CallableFunction
}

const Button: FC<ButtonProps> = props => {
	return (
		<button
			type={'button'}
			onClick={() => props.onClick && props.onClick()}
			className={`${style.button} ${props.className}`}>
			{props.children}
		</button>
	)
}

Button.displayName = 'Button'
export default memo(Button)
