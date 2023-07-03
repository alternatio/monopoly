'use client'

import { FC, useState } from 'react'
import style from './Chat.module.scss'
import { useAppSelector } from '@/store/index'

const ChatInput: FC = () => {
	const userData = useAppSelector(state => state.user)
	const [textMessage, setTextMessage] = useState<string>('')


	return (
		<div className={style.chatInput}>
			<label className={style.label}>
				<input
					className={style.input}
					value={textMessage}
					onChange={e => setTextMessage(e.target.value)}
					type='text'
					placeholder={'Сообщение'}
				/>
			</label>
			<button className={style.button} onClick={() => {

			}}>
				Отправить
			</button>
		</div>
	)
}

export default ChatInput
