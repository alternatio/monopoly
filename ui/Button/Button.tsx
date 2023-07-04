import { FC, memo, ReactNode } from 'react'
import style from './Button.module.scss'
import Loader from "@/ui/Loader/Loader";

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
			{props.isLoading ? <Loader /> : props.children}
		</button>
	)
}

Button.displayName = 'Button'
export default memo(Button)
