import { FC, memo } from 'react'
import { cellI } from '@/store/interfaces/cell'
import CellBlock from '@/components/Session/Cell/CellBlock'

const CornerCell: FC<{ cell: cellI }> = props => {
	if (props.cell.data?.type === 'corner') {
		return <CellBlock cell={props.cell}>{props.cell.data.text}</CellBlock>
	} else return null
}

export default memo(CornerCell)
