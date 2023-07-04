import { FC, memo } from 'react'
import CellBlock from '@/components/Session/Cell/CellBlock'
import { cellI } from '@/store/interfaces/cell'
import FieldOfChips from '@/components/Session/Chip/FieldOfChips'

const CornerCell: FC<cellI> = props => {
	if (props.data?.type === 'corner') {
		return (
			<CellBlock cell={props}>
				{props.data.text}
				{typeof props.index === 'number' ? (
					<FieldOfChips index={props.index} />
				) : null}
			</CellBlock>
		)
	} else return null
}

export default memo(CornerCell)
