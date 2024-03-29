'use client'

import {FC, memo, useEffect, useState} from 'react'
import style from './Popup.module.scss'
import PopupBlock from '@/components/Popups/PopupBlock'
import Input from '@/ui/Input/Input'
import Button from '@/ui/Button/Button'
import Checkbox from '@/ui/CheckBox/Checkbox'
import { AnimatePresence } from 'framer-motion'
import {useAppDispatch, useAppSelector} from '@/store/index'
import { createSession } from '@/store/firestore/controller'
import InputNumber from '@/ui/InputNumber/InputNumber'
import { userAddIcon, userRemoveIcon } from '@/lib/ImportIcons'
import { useRouter } from 'next/navigation'
import {pushMiniPopupTexts} from "@/store/reducers/popups";

const CreateGamePopup: FC = () => {
	const currentPopup = useAppSelector(state => state.popups.currentPopup)
	const user = useAppSelector(state => state.user.data)
	const dispatch = useAppDispatch()
	const router = useRouter()

	const [password, setPassword] = useState<string>('')
	const [passwordDisabled, handlePassword] = useState(true)
	const [maxUsers, setMaxUsers] = useState(2)
	const [isLoading, handleLoading] = useState<boolean>(false)

	useEffect(() => {
		handleLoading(false)
	}, [currentPopup])

	return (
		<AnimatePresence>
			{currentPopup === 2 && (
				<PopupBlock title={'Создание сессии'}>
					<div className={style.checkboxWithInput}>
						<Checkbox
							onChange={() => handlePassword(prev => !prev)}
							input={{
								checked: !passwordDisabled,
							}}
						/>
						<Input
							autoFocus={true}
							maxLength={15}
							onChange={e => {
								setPassword(e.target.value)
							}}
							input={{
								value: password,
								placeholder: 'Пароль',
								disabled: passwordDisabled,
							}}
						/>
					</div>
					<InputNumber
						className={style.usersQuantity}
						value={maxUsers}
						setValue={setMaxUsers}
						firstImage={userRemoveIcon}
						secondImage={userAddIcon}
						text={'количество игроков'}
						min={2}
						max={5}
					/>
					{user && (
						<Button
							isLoading={isLoading}
							className={style.button}
							onClick={async () => {
								const result = await createSession(user, maxUsers, password)
								if (!result) {
									dispatch(
										pushMiniPopupTexts({
											body: 'Ошибка! Попробуйте ещё раз',
											type: 'red',
										})
									)
									return
								}
								handleLoading(true)
								router.push(`/game/${result}`)
							}}>
							Создать
						</Button>
					)}
				</PopupBlock>
			)}
		</AnimatePresence>
	)
}

export default memo(CreateGamePopup)
