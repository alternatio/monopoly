'use client'

import { FC, useState } from 'react'
import style from './Chat.module.scss'
import {useAppDispatch, useAppSelector} from '@/store/index'
import {pushMessage} from "@/store/firestore/controller";
import {pushMiniPopupTexts} from "@/store/reducers/popups";

const ChatInput: FC = () => {
	const sessionData = useAppSelector(state => state.session.sessionDataStore)
	const userData = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()
	const [textMessage, setTextMessage] = useState<string>('')

	const sendMessage = () => {
		if (!sessionData?.id) {
			dispatch(pushMiniPopupTexts({
				type: 'red',
				body: 'Ошибка, такой сессии не существует'
			}))
			return
		}
		// console.log()
		if (!userData.gameData?.name) {
			dispatch(pushMiniPopupTexts({
				type: 'red',
				body: 'Ошибка, попробуйте ещё раз'
			}))
			return
		}
		pushMessage(sessionData.id, {
			author: userData.gameData.name,
			color: userData.gameData.color.hex,
			body: textMessage
		})
		setTextMessage('')
	}

	return (
		<div className={style.chatInput}>
			<label className={style.label}>
				<input
					onKeyDown={(e) => {
						if (e.key === 'Enter') sendMessage()
					}}
					className={style.input}
					value={textMessage}
					onChange={e => setTextMessage(e.target.value)}
					type='text'
					placeholder={'Сообщение'}
				/>
			</label>
			<button className={style.button} onClick={() => sendMessage()}>
				Отправить
			</button>
		</div>
	)
}

export default ChatInput
