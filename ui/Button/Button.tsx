import { FC, memo, ReactNode } from 'react'
import style from './Button.module.scss'

interface ButtonProps {
	children?: ReactNode
	className?: string
	onClick?: CallableFunction
	isLoading?: boolean
}

const Button: FC<ButtonProps> = props => {
	return (
		<button
			type={'button'}
			onClick={() => props.onClick && props.onClick()}
			className={`${style.button} ${props.className}`}>
			{props.isLoading ? 'Загрузка' : props.children}
		</button>
	)
}

Button.displayName = 'Button'
export default memo(Button)
