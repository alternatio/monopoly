'use client'

import { FC, memo, useEffect, useState } from 'react'
import style from './Popup.module.scss'
import PopupBlock from '@/components/Popups/PopupBlock'
import Input from '@/ui/Input/Input'
import Button from '@/ui/Button/Button'
import { AnimatePresence } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '@/store/index'
import { addPlayerInSession } from '@/store/firestore/controller'
import { useRouter } from 'next/navigation'
import { pushMiniPopupTexts } from '@/store/reducers/popups'

const EnterInGamePopup: FC = () => {
	const currentPopup = useAppSelector(state => state.popups.currentPopup)
	const userData = useAppSelector(state => state.user.data)
	const dispatch = useAppDispatch()

	const [id, setId] = useState('')
	const [password, setPassword] = useState('')
	const [isLoading, handleLoading] = useState<boolean>(false)

	const router = useRouter()

	useEffect(() => {
		handleLoading(false)
	}, [currentPopup])

	return (
		<AnimatePresence>
			{currentPopup === 3 && (
				<PopupBlock title={''}>
					<Input
						className={style.monoInput}
						onChange={e => setId(e.target.value)}
						autoFocus={true}
						input={{
							placeholder: 'ID',
							value: id,
						}}
					/>
					<Input
						className={style.monoInput}
						onChange={e => setPassword(e.target.value)}
						autoFocus={false}
						input={{
							placeholder: 'Пароль, если он есть',
							value: password,
						}}
					/>
					<div className={style.buttonWithDescription}>
						<Button
							isLoading={isLoading}
							className={style.button}
							onClick={async () => {
								handleLoading(true)
								if (!userData) {
									dispatch(
										pushMiniPopupTexts({
											body: 'Ошибка! Вы не авторизированны',
											type: 'red',
										})
									)
									handleLoading(false)
									return
								}
								const response = await addPlayerInSession(id, userData, password)
								if (!response) {
									dispatch(
										pushMiniPopupTexts({
											body: 'Ошибка! Возможно, сессии не существует, пароль неверный или она заполнена😐',
											type: 'red',
										})
									)
									handleLoading(false)
									return
								}
								if (!response) {
									dispatch(
										pushMiniPopupTexts({
											body: 'Ошибка! Такой сессии не существует',
											type: 'red',
										})
									)
									handleLoading(false)
									return
								}
								router.push(`/game/${id}`)
							}}>
							Присоединиться
						</Button>
						{/*<span className={style.description}>*/}
						{/*	Также вы можете перейти по ссылке товарища, а не копировать.*/}
						{/*</span>*/}
					</div>
				</PopupBlock>
			)}
		</AnimatePresence>
	)
}

export default memo(EnterInGamePopup)
