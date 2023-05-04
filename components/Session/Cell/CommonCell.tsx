import { FC, memo } from 'react'
import style from './Cell.module.scss'
import CellBlock from '@/components/Session/Cell/CellBlock'
import Image from 'next/image'
import CellPrice from '@/components/Session/Cell/CellPrice'
import { cellsWithPossibleMovesI } from '@/components/Session/Cell/Cell'

const CommonCell: FC<cellsWithPossibleMovesI> = props => {
	if (props.cell.data.type === 'common') {
		return (
			<CellBlock cell={props.cell}>
				<CellPrice data={props.cell.data} />
				<Image
					className={style.cellImage}
					data-rotated={
						props.cell.data.direction === 'top' ||
						props.cell.data.direction === 'bottom'
					}
					src={props.cell.data.image}
					alt={'company'}
				/>
			</CellBlock>
		)
	} else return null
}

export default memo(CommonCell)
