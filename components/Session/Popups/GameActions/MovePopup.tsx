'use client'

import { FC, memo } from 'react'
import popupStyle from '../Popups.module.scss'
import style from './GameActions.module.scss'
import { useAppSelector } from '@/store/index'
import Button from '@/ui/Button/Button'
import { makeMoveFunctional } from '@/store/firestore/controller'
import {checkCurrentPlayer, rollDice} from '@/lib/sessionFunctions'

const MovePopup: FC = () => {
	const sessionData = useAppSelector(state => state.session.sessionDataStore)
	const currentPlayer = useAppSelector(state => state.user)

	if (sessionData?.players?.length !== sessionData?.maxPlayers) return null
	if (!sessionData || !checkCurrentPlayer(sessionData, currentPlayer)) return null
	if (sessionData?.playerCanAct) return null

	// currentPlayer

	return (
		<div className={`${popupStyle.popup} ${style.popup}`}>
			<p className={style.text}>
				Сейчас ваш ход! Этот ответственный момент, когда вам нужно увидеть ваше будущее, бросив
				игральные кости
			</p>
			<Button
				onClick={async () => {
					if (!sessionData) return
					const result = rollDice()
					await makeMoveFunctional(sessionData, currentPlayer, result, {
						pushMessage: true,
					})
				}}
				className={style.button}>
				Сделать ход
			</Button>
		</div>
	)
}

export default memo(MovePopup)
