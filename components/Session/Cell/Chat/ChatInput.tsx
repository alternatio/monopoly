import { FC } from 'react'
import style from './Chat.module.scss'

const ChatInput: FC = () => {
	return (
		<div className={style.chatInput}>
			<label className={style.label}>
				<input className={style.input} type='text' placeholder={'Сообщение'} />
			</label>
			<button className={style.button}>
				Отправить
			</button>
		</div>
	)
}

export default ChatInput