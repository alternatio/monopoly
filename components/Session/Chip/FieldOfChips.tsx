'use client'

import { FC, memo } from 'react'
import { useAppSelector } from '@/store/index'
import style from './Chip.module.scss'
import Chip from '@/components/Session/Chip/Chip'
import {makeMove} from "@/store/firestore/controller";

interface FieldOfChipsProps {
	index: number
}

const FieldOfChips: FC<FieldOfChipsProps> = ({ index }) => {
	const players = useAppSelector(
		state => state.session.sessionDataStore?.players
	)
	const session = useAppSelector(state => state.session.sessionDataStore)

	return (
		<div className={style.fieldOfChips} onClick={() => {
			if (!session?.id) return
			if (!players) return
			makeMove(session.id, players[0], 3)
		}}>
			{players?.map(player => {
				if (player.gameData.position === index) {
					return <Chip user={player} />
				} else return null
			})}
		</div>
	)
}

export default memo(FieldOfChips)
