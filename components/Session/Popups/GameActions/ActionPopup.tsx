'use client'

import { FC } from 'react'
import popupStyle from '../Popups.module.scss'
import style from './GameActions.module.scss'
import { useAppSelector } from '@/store/index'
import { actionPopupChecker } from '@/components/Session/Popups/GameActions/popupChecker'
import ActionCell from '@/components/Session/Popups/GameActions/CellsActions/ActionCell'
import Button from "@/ui/Button/Button";
import {changeTurnPlayer} from "@/store/firestore/controller";

const ActionPopup: FC = () => {
	const sessionData = useAppSelector(state => state.session)
	const currentPlayer = useAppSelector(state => state.user)

	if (!actionPopupChecker(sessionData.sessionDataStore, currentPlayer)) return null
	if (!currentPlayer.gameData?.position) return null
	const playerPosition = currentPlayer.gameData.position % sessionData.maxMoves
	const currentCell = sessionData.cells[playerPosition]

	return (
		<div className={`${popupStyle.popup} ${style.popup}`}>
			{/* corners */}
			{currentCell.data.type === 'corner' && currentCell.data.extendType === 'start' ? (
				<ActionCell onClick={() => {}} buttonText={'Ладно'}>
					ого это старт
				</ActionCell>
			) : null}
			{currentCell.data.type === 'corner' && currentCell.data.extendType === 'prison' ? (
				<ActionCell onClick={() => {}} buttonText={'Ладно'}>
					ого это тюрьма
				</ActionCell>
			) : null}
			{currentCell.data.type === 'corner' && currentCell.data.extendType === 'dices' ? (
				<ActionCell onClick={() => {}} buttonText={'Ладно'}>
					ого это игральные кости
				</ActionCell>
			) : null}
			{currentCell.data.type === 'corner' && currentCell.data.extendType === 'policeman' ? (
				<ActionCell onClick={() => {}} buttonText={'Ладно'}>
					ого это полицейский
				</ActionCell>
			) : null}

			{/* common cell */}
			{currentCell.data.type === 'common' ? (
				<ActionCell onClick={() => {}} buttonText={'Ладно'}>
					ого это {currentCell.data.name}
				</ActionCell>
			) : null}

			{/* uncommon cell */}
			{currentCell.data.type === 'uncommon' ? (
				<ActionCell onClick={() => {}} buttonText={'Ладно'}>
					ого это {currentCell.data.name}
				</ActionCell>
			) : null}

			{/* tax cell */}
			{currentCell.data.type === 'tax' ? (
				<ActionCell onClick={() => {}} buttonText={'Ладно'}>
					ого это налоги
				</ActionCell>
			) : null}

			{/* chance cell */}
			{currentCell.data.type === 'chance' ? (
				<ActionCell onClick={() => {}} buttonText={'Ладно'}>
					ого это шанс
				</ActionCell>
			) : null}

			<Button onClick={() => {
				if (!sessionData.sessionDataStore) return
				changeTurnPlayer(sessionData.sessionDataStore)
			}}>
				ok
			</Button>
		</div>
	)
}

export default ActionPopup
