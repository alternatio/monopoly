import { FC, memo } from 'react'
import CellBlock from '@/components/Session/Cell/CellBlock'
import Image from 'next/image'
import style from '@/components/Session/Cell/Cell.module.scss'
import { cellsWithPossibleMovesI } from '@/components/Session/Cell/Cell'

const TaxCell: FC<cellsWithPossibleMovesI> = props => {
	if (props.cell.data?.type === 'tax') {
		return (
			<CellBlock cell={props.cell}>
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

export default memo(TaxCell)
