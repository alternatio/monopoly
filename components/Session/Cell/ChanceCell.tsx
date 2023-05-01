import { FC, memo } from 'react'
import { cellI } from '@/store/interfaces/cell'
import CellBlock from '@/components/Session/Cell/CellBlock'

const TaxCell: FC<{cell: cellI}> = props => {
	if (props.cell.data?.type === 'chance') {
		return (
			<CellBlock cell={props.cell}>
				{props.cell.data.type}
			</CellBlock>
		)
	} else return null
}

export default memo(TaxCell)