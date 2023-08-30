import { FC, memo } from 'react'
import CellBlock from '@/components/Session/Cells/CellBlock'
import { cellI } from '@/store/interfaces/cell'
import FieldOfChips from '@/components/Session/Chip/FieldOfChips'

interface Props {
	data: cellI
}

const CornerCell: FC<Props> = props => {
	if (props.data.data?.type === 'corner') {
		return (
			<CellBlock cell={props.data}>
				{props.data.data.text}
				{typeof props.data.index === 'number' ? (
					<FieldOfChips index={props.data.index} />
				) : null}
			</CellBlock>
		)
	} else return null
}

export default memo(CornerCell)
