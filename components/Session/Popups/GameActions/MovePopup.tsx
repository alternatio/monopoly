'use client'

import { CSSProperties, FC, memo } from 'react'
import popupStyle from '../Popups.module.scss'
import style from './GameActions.module.scss'
import { useAppSelector } from '@/store/index'
import Button from '@/ui/Button/Button'
import { makeMoveAndPushMessageAndCheckDouble } from '@/store/firestore/controller'
import { rollDice } from '@/lib/sessionFunctions'

const movePopupStyles: CSSProperties = {
	width: '100%',
	zIndex: 9,
	top: '2rem',
	bottom: 'unset',
}

const MovePopup: FC = () => {
	const sessionData = useAppSelector(state => state.session.sessionDataStore)
	const currentPlayer = useAppSelector(state => state.user)

	const foundPlayerIndex = sessionData?.players?.findIndex(
		player => player.data?.uid === currentPlayer.data?.uid
	)
	const isCurrentPlayerTurn: boolean = foundPlayerIndex === sessionData?.playerTurn
	if (!isCurrentPlayerTurn) return null

	// currentPlayer

	return (
		<div className={popupStyle.popup} style={movePopupStyles}>
			<p className={style.text}>
				Сейчас ваш ход! Этот ответственный момент, когда вам нужно увидеть ваше будущее, бросив
				игральные кости
			</p>
			<Button
				onClick={async () => {
					if (!sessionData) return
					const result = rollDice()
					await makeMoveAndPushMessageAndCheckDouble(sessionData, currentPlayer, result)
				}}
				className={style.button}>
				Сделать ход
			</Button>
		</div>
	)
}

export default memo(MovePopup)
