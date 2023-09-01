import {CSSProperties, FC, memo} from 'react'
import style from './Chat.module.scss'
import { messageI } from '@/store/interfaces/message'

interface MessageProps {
	message: messageI
}

const Message: FC<MessageProps> = ({ message }) => {
	const systemStyles: CSSProperties = {
		background: message.color,
		color: 'var(--colorBlack)',
		borderRadius: '0.25rem'
	}

	return (
		<div className={style.message}>
			<span className={style.messageAuthor} style={message.system ? systemStyles :{ color: message.color }}>
				{message.author}:
			</span>
			<span className={style.messageBody}>{message.body}</span>
		</div>
	)
}

export default memo(Message)
