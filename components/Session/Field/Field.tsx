'use client'

import { FC, useEffect, useRef } from 'react'
import style from './Field.module.scss'
import Cell from '@/components/Session/Cell/Cell'
import { generateCells } from '@/store/data/cells'
import { useAppDispatch, useAppSelector } from '@/store/index'
import { setCells, setMaxMoves } from '@/store/reducers/session'

const Field: FC = () => {
	const gridSize = useAppSelector(state => state.session.gridSize)
	const cells = useAppSelector(state => state.session.cells)

	const dispatch = useAppDispatch()

	const setMaxMovesLocal = (maxMoves: number) => {
		dispatch(setMaxMoves(maxMoves))
	}

	useEffect(() => {
		dispatch(setCells(generateCells(gridSize, setMaxMovesLocal)))
	}, [gridSize])

	return (
		<div
			style={{
				gridTemplateColumns: `repeat(${gridSize[0]}, 1fr)`,
				gridTemplateRows: `repeat(${gridSize[1]}, 1fr)`,
			}}
			className={style.field}>
			{cells.length
				? cells.map((cellData, index) => {
						return (
							<Cell
								key={index}
								index={cellData.index}
								data={cellData.data}
								position={cellData.position}
							/>
						)
				  })
				: null}
		</div>
	)
}

export default Field
