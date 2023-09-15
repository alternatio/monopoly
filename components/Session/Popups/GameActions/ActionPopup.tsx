'use client'

import { FC } from 'react'
import popupStyle from '../Popups.module.scss'
import style from './GameActions.module.scss'
import { useAppSelector } from '@/store/index'
import { actionPopupChecker } from '@/components/Session/Popups/GameActions/popupChecker'
import ActionCell from '@/components/Session/Popups/GameActions/CellsActions/ActionCell'
import Button from '@/ui/Button/Button'
import { changeTurnPlayer } from '@/store/firestore/controller'
import {getActionChance} from "@/components/Session/Popups/GameActions/CellsActions/actionFunctions";

const ActionPopup: FC = () => {
	const sessionData = useAppSelector(state => state.session)
	const currentPlayer = useAppSelector(state => state.user)

	if (!actionPopupChecker(sessionData.sessionDataStore, currentPlayer)) return null
	if (!currentPlayer.gameData?.position) return null
	const playerPosition = currentPlayer.gameData.position % sessionData.maxMoves
	const currentCell = sessionData.cells[playerPosition]

	// common companies or uncommon companies
	if (currentCell.data.type === 'common') {
		return (
			<ActionCell onClicks={[() => {}]} buttonsText={['Ладно']} types={[undefined]}>
				ого это {currentCell.data.name}
			</ActionCell>
		)
	} else if (currentCell.data.type === 'uncommon') {
		return (
			<ActionCell onClicks={[() => {}]} buttonsText={['Ладно']} types={[undefined]}>
				ого это {currentCell.data.name}
			</ActionCell>
		)
	}
	// tax or chance
	else if (currentCell.data.type === 'tax') {
		return (
			<ActionCell onClicks={[() => {}]} buttonsText={['Ладно']} types={[undefined]}>
				ого это налоги
			</ActionCell>
		)
	} else if (currentCell.data.type === 'chance') {
		return (
			<ActionCell onClicks={[() => getActionChance()]} buttonsText={['Ладно']} types={[undefined]}>
				ого это шанс
			</ActionCell>
		)
	}
	// corners
	else if (currentCell.data.type === 'corner' && currentCell.data.extendType === 'start') {
		return (
			<ActionCell onClicks={[() => {}]} buttonsText={['Ладно']} types={[undefined]}>
				ого это старт
			</ActionCell>
		)
	} else if (currentCell.data.type === 'corner' && currentCell.data.extendType === 'prison') {
		return (
			<ActionCell onClicks={[() => {}]} buttonsText={['Ладно']} types={[undefined]}>
				ого это тюрьма
			</ActionCell>
		)
	} else if (currentCell.data.type === 'corner' && currentCell.data.extendType === 'policeman') {
		return (
			<ActionCell onClicks={[() => {}]} buttonsText={['Ладно']} types={[undefined]}>
				ого это полицейский
			</ActionCell>
		)
	} else if (currentCell.data.type === 'corner' && currentCell.data.extendType === 'dices') {
		return (
			<ActionCell onClicks={[() => {}]} buttonsText={['Ладно']} types={[undefined]}>
				ого это игральные кости
			</ActionCell>
		)
	}

	// other actions
	else {
		return (
			<div className={`${popupStyle.popup} ${style.popup}`}>
				<Button
					onClick={() => {
						if (!sessionData.sessionDataStore) return
						changeTurnPlayer(sessionData.sessionDataStore)
					}}>
					Передать очередь
				</Button>
			</div>
		)
	}
}

export default ActionPopup
