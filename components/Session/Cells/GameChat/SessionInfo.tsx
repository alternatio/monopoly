'use client'

import { FC, useEffect, useState } from 'react'
import style from './Chat.module.scss'
import { useAppSelector } from '@/store/index'

interface time {
  hours: number
	minutes: number
	seconds: number
}

const SessionInfo: FC = () => {
	const sessionData = useAppSelector(state => state.session.sessionDataStore)
	const [currentTime, setCurrentTime] = useState<time>({
		seconds: 0,
    minutes: 0,
    hours: 0
	})

	useEffect(() => {
    if (!sessionData?.timeStart && !sessionData) return
    const interval = setInterval(() => {
      if (!sessionData.timeStart) {
        clearInterval(interval)
        return
      }
      const date = new Date()
      const difference = date.getTime() - sessionData.timeStart
      const seconds = Math.floor(difference / 1000) % 60
      const minutes = Math.floor(difference / 60000) % 60
      const hours = Math.floor(difference / 3600000)

      setCurrentTime({
        seconds,
        minutes,
        hours,
      })
    }, 1000)
	}, [sessionData])

	return (
		<div className={style.chatInfo}>
			{sessionData && sessionData.owner && sessionData.timeStart ? <>
        <span>
          Время игры: {currentTime.hours}:{currentTime.minutes}:{currentTime.seconds}
        </span>
        <span>
          Создатель: {sessionData.owner.name}
        </span>
      </> : null}
		</div>
	)
}

export default SessionInfo
