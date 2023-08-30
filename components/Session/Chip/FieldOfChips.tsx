'use client'

import { FC, memo } from 'react'
import { useAppSelector } from '@/store/index'
import style from './Chip.module.scss'
import Chip from '@/components/Session/Chip/Chip'

interface FieldOfChipsProps {
	index: number
}

const FieldOfChips: FC<FieldOfChipsProps> = ({ index }) => {
	const session = useAppSelector(state => state.session)

	return (
		<div
			className={style.fieldOfChips}
			onClick={() => {
				if (!session.sessionDataStore?.id) return
				if (!session.sessionDataStore.players) return
			}}>
			{session.sessionDataStore?.players?.map(player => {
				if (player.gameData && player.gameData.position % session.maxMoves === index) {
					return <Chip user={player} />
				} else return null
			})}
		</div>
	)
}

export default memo(FieldOfChips)
