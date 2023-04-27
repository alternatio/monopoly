'use client'

import { FC, memo, useState } from 'react'
import style from './Popup.module.scss'
import PopupBlock from '@/components/Popups/PopupBlock'
import Input from '@/ui/Input/Input'
import Button from '@/ui/Button/Button'
import Checkbox from '@/ui/CheckBox/Checkbox'
import { AnimatePresence } from 'framer-motion'
import { useAppSelector } from '@/store/index'
import { createSession } from '@/store/firestore/controller'

const CreateGamePopup: FC = () => {
	const currentPopup = useAppSelector(state => state.popups.currentPopup)

	const [password, setPassword] = useState('')
	const [passwordDisabled, handlePassword] = useState(true)

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
					<Button className={style.button} onClick={createSession} >Создать</Button>
				</PopupBlock>
			)}
		</AnimatePresence>
	)
}

export default memo(CreateGamePopup)
