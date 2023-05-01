import { FC, memo } from 'react'
import { cellI } from '@/store/interfaces/cell'
import CellBlock from '@/components/Session/Cell/CellBlock'

const UncommonCell: FC<{ cell: cellI }> = props => {
	if (props.cell.data?.type === 'uncommon') {
		return <CellBlock cell={props.cell}>{props.cell.data.name}</CellBlock>
	} else return null
}

export default memo(UncommonCell)
