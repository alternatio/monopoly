'use client'

import {FC, useEffect, useRef} from 'react'
import style from './Chat.module.scss'
import {useAppSelector} from "@/store/index";
import {messageI} from "@/store/interfaces/message";
import {pushMessage} from "@/store/firestore/controller";

const ChatTape: FC = () => {
  const sessionData = useAppSelector(state => state.session.sessionDataStore)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    ref.current?.scrollTo({top: ref.current?.scrollHeight, behavior: 'smooth'})
  }, [sessionData?.messages])

	return (
    <div className={style.chatTape} ref={ref} onClick={() => {
      if (!sessionData?.id) return
      const message: messageI = {
        color: '#3df',
        author: 'tester',
        body: '1'
      }
      pushMessage(sessionData.id, message)
    }}>
      {sessionData?.messages ? sessionData.messages.map((message) => {
        return (
          <div className={style.message}>
            <span className={style.messageAuthor} style={{color: message.color}}>
              {message.author}:
            </span>
            <span className={style.messageBody}>
              {message.body}
            </span>
          </div>
        )
      }) : null}
    </div>
  )
}

export default ChatTape
