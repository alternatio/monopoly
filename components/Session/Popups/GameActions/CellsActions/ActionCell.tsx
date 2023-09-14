import style from '../GameActions.module.scss'
import Button, { ButtonProps } from '@/ui/Button/Button'
import { FC, ReactNode } from 'react'

interface ActionChanceProps {
	buttonText?: string
	children?: ReactNode
}

const ActionChance: FC<ActionChanceProps & Pick<ButtonProps, 'type' | 'onClick'>> = ({
	buttonText,
	onClick,
	children,
	type,
}) => {
	return (
		<>
			<p className={style.text}>{children}</p>
			<Button onClick={onClick} className={style.button} type={type}>
				{buttonText}
			</Button>
		</>
	)
}

export default ActionChance
