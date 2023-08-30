import { FC, memo } from 'react'
import style from './Chat.module.scss'
import { messageI } from '@/store/interfaces/message'

interface MessageProps {
	message: messageI
}

const Message: FC<MessageProps> = ({ message }) => {
	return (
		<div className={style.message}>
			<span className={style.messageAuthor} style={{ color: message.color }}>
				{message.author}:
			</span>
			<span className={style.messageBody}>{message.body}</span>
		</div>
	)
}

export default memo(Message)
