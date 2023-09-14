import { FC, memo } from 'react'
import CellBlock from '@/components/Session/Cells/CellBlock'
import { cellI } from '@/store/interfaces/cell'
import FieldOfChips from '@/components/Session/Chip/FieldOfChips'
import Image from 'next/image'
import style from './Cell.module.scss'

interface Props {
	data: cellI
}

const CornerCell: FC<Props> = props => {
	if (props.data.data?.type === 'corner') {
		return (
			<CellBlock cell={props.data}>
				{/*{props.data.data.text}*/}
				<Image className={style.cornerImage} src={props.data.data.image} alt={'corner'} />
				{typeof props.data.index === 'number' ? <FieldOfChips index={props.data.index} /> : null}
			</CellBlock>
		)
	} else return null
}

export default memo(CornerCell)
