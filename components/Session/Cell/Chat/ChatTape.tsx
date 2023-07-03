'use client'

import { FC, useEffect, useRef } from 'react'
import style from './Chat.module.scss'
import { useAppSelector } from '@/store/index'
import { messageI } from '@/store/interfaces/message'
import { pushMessage } from '@/store/firestore/controller'
import Message from '@/components/Session/Cell/Chat/Message'

const ChatTape: FC = () => {
	const sessionData = useAppSelector(state => state.session.sessionDataStore)
	const ref = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (!ref.current) return
		ref.current?.scrollTo({
			top: ref.current?.scrollHeight,
			behavior: 'smooth',
		})
	}, [sessionData?.messages])

	return (
		<div
			className={style.chatTape}
			ref={ref}>
			{sessionData?.messages
				? sessionData.messages.map(message => {
						return <Message message={message} />
				  })
				: null}
		</div>
	)
}

export default ChatTape
