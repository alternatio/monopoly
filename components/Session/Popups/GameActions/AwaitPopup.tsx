'use client'

import { FC, memo } from 'react'
import popupStyle from '../Popups.module.scss'
import style from './GameActions.module.scss'
import { useAppSelector } from '@/store/index'
import { awaitPopupChecker } from '@/components/Session/Popups/GameActions/popupChecker'

const AwaitPopup: FC = () => {
	const sessionData = useAppSelector(state => state.session.sessionDataStore)

	if (!awaitPopupChecker(sessionData)) return null

	return (
		<div className={`${popupStyle.popup} ${style.popup}`}>
			<p className={style.text}>
				Приветствуем всех, мы ожидаем, пока все участники игры зайдут в сессию
			</p>
		</div>
	)
}

export default memo(AwaitPopup)
