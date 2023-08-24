import { FC, memo } from 'react'
import Button from '@/ui/Button/Button'
import style from './UserPopup.module.scss'

// ButtonsForSelf
interface ButtonsForSelfProps {

}

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
interface ButtonsForAnotherProps {

}

export const ButtonsForAnother: FC = memo(() => {
	return (
		<>
			<Button className={style.commonButton}>Договор</Button>
		</>
	)
})
// - - -

// ButtonsForAdmin
interface ButtonsForAdminProps {

}

export const ButtonsForAdmin: FC = memo(() => {
	return (
		<>
			<Button className={style.commonButton}>Договор</Button>
			<Button className={style.redButton}>Выгнать</Button>
		</>
	)
})
// - - -
