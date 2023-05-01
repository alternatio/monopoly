import { FC } from 'react'
import style from './Field.module.scss'
import Cell from '@/components/Session/Cell/Cell'
import { cells, generateCells } from '@/store/data/cells'

const Field: FC = () => {
	const gridSize: [number, number] = [13, 13]

	generateCells(gridSize)

	return (
		<div
			style={{
				gridTemplateColumns: `repeat(${gridSize[0]}, 1fr)`,
				gridTemplateRows: `repeat(${gridSize[1]}, 1fr)`,
			}}
			className={style.field}>
			{cells.map((cellData, index) => {
				return (
					<Cell key={index} data={cellData.data} position={cellData.position} />
				)
			})}
		</div>
	)
}

export default Field
