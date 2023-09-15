import style from '../GameActions.module.scss'
import Button, { ButtonProps } from '@/ui/Button/Button'
import { FC, ReactNode } from 'react'
import popupStyle from '../../Popups.module.scss'

interface ActionChanceProps {
	buttonsText?: string[]
	children?: ReactNode
	onClicks?: (() => void)[]
	types?: ButtonProps['type'][]
}

const ActionChance: FC<ActionChanceProps> = ({ buttonsText, onClicks, children, types }) => {
	if (!onClicks?.length || !types?.length) return null

	return (
		<div className={`${popupStyle.popup} ${style.popup}`}>
			<p className={style.text}>{children}</p>
			{buttonsText?.map((text, index) => {
				return (
					<Button onClick={onClicks[index]} className={style.button} type={types[index]}>
						{text}
					</Button>
				)
			})}
		</div>
	)
}

export default ActionChance
