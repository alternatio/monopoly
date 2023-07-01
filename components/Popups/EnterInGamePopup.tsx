'use client'

import { FC, memo, useState } from 'react'
import style from './Popup.module.scss'
import PopupBlock from '@/components/Popups/PopupBlock'
import Input from '@/ui/Input/Input'
import Button from '@/ui/Button/Button'
import { AnimatePresence } from 'framer-motion'
import { useAppSelector } from '@/store/index'
import {addPlayerInSession} from "@/store/firestore/controller";
import {useRouter} from "next/navigation";

const EnterInGamePopup: FC = () => {
	const currentPopup = useAppSelector(state => state.popups.currentPopup)
	const userData = useAppSelector(state => state.user.data)

	const [id, setId] = useState('')
	const [password, setPassword] = useState('')

	const router = useRouter()

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
						<Button className={style.button} onClick={async () => {
							if (!userData) return
							const response = await addPlayerInSession(id, userData, password)
							if (response) {
								router.push(`/game/${id}`)
							} else return
						}}>Присоединиться</Button>
						<span className={style.description}>
							Также вы можете перейти по ссылке товарища, а не копировать.
						</span>
					</div>
				</PopupBlock>
			)}
		</AnimatePresence>
	)
}

export default memo(EnterInGamePopup)
