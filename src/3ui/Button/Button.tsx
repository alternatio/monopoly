import { FC, memo, ReactNode } from 'react'
import style from './styles/Button.module.scss'

interface ButtonProps {
	children?: ReactNode
	className?: string
}

const Button: FC<ButtonProps> = props => {
	return (
    <div className={`${style.button} ${props.className}`}>
			{props.children}
		</div>
  )
}

Button.displayName = 'Button'
export default memo(Button)
