'use client'

import { FC, memo } from 'react'
import popupStyle from '../Popups.module.scss'
import style from './GameActions.module.scss'
import Button from '@/ui/Button/Button'
import { checkCurrentPlayer } from '@/lib/sessionFunctions'
import { useAppSelector } from '@/store/index'
import {changeTurnPlayer} from '@/store/firestore/controller'
import {actionPopupChecker} from "@/components/Session/Popups/GameActions/popupChecker";

const ActionPopup: FC = () => {
	const sessionData = useAppSelector(state => state.session.sessionDataStore)
	const currentPlayer = useAppSelector(state => state.user)

	if (!actionPopupChecker(sessionData, currentPlayer)) return null

	return (
		<div className={`${popupStyle.popup} ${style.popup}`}>
			<p className={style.text}>вау, это какое-то событие</p>
			<Button
				onClick={async () => {
					if (!sessionData) return
					console.log('что-то делается')
					await changeTurnPlayer(sessionData, false, sessionData.isDouble)
				}}
				className={style.button}>
				делать что-то
			</Button>
		</div>
	)
}

export default memo(ActionPopup)
