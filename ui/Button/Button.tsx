import {CSSProperties, FC, memo, ReactNode} from 'react'
import style from './Button.module.scss'
import Loader from "@/ui/Loader/Loader";

export interface ButtonProps {
	children?: ReactNode
	className?: string
	onClick?: () => void
	isLoading?: boolean
	style?: CSSProperties
	type?: 'black' | 'red' | 'green'
}

const Button: FC<ButtonProps> = props => {
	return (
		<button
			type={'button'}
			onClick={props.onClick}
			style={props.style}
			data-buttonType={props.type}
			className={`${style.button} ${props.className}`}>
			{props.isLoading ? <Loader /> : props.children}
		</button>
	)
}

Button.displayName = 'Button'
export default memo(Button)
