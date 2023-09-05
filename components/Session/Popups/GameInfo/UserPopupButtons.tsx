import { FC, memo } from 'react'
import Button from '@/ui/Button/Button'
import style from './UserPopup.module.scss'
import { sessionI } from '@/store/interfaces/session'
import { userI } from '@/store/interfaces/user'
import { UserPopupProps } from '@/components/Session/Popups/GameInfo/UserPopupBody'
import { kickPlayer } from '@/store/firestore/controller'

// ButtonsForSelf
interface ButtonsForSelfProps {}

export const ButtonsForSelf: FC = memo(() => {
	return (
		<>
			<Button className={style.commonButton}>Кредит</Button>
			<Button className={style.redButton}>Сдаться</Button>
		</>
	)
})
// - - -

// ButtonsForAnother
interface ButtonsForAnotherProps {}

export const ButtonsForAnother: FC = memo(() => {
	return (
		<>
			<Button className={style.commonButton}>Договор</Button>
		</>
	)
})
// - - -

// ButtonsForAdmin
interface ButtonsForAdminProps extends UserPopupProps {}

export const ButtonsForAdmin: FC<ButtonsForAdminProps> = memo(props => {
	return (
		<>
			<Button className={style.commonButton}>Договор</Button>
			<Button
				className={style.redButton}
				onClick={async () => {
					if (!props.sessionData || !props.user) return
					await kickPlayer(props.sessionData, props.user)
				}}>
				Выгнать
			</Button>
		</>
	)
})
// - - -
