import { FC, memo } from 'react'
import style from './Cell.module.scss'
import CellBlock from '@/components/Session/Cell/CellBlock'
import Image from 'next/image'
import CellPrice from '@/components/Session/Cell/CellPrice'
import { cellI } from '@/store/interfaces/cell'
import FieldOfChips from '@/components/Session/Chip/FieldOfChips'

const CommonCell: FC<cellI> = props => {
	if (props.data.type === 'common') {
		return (
			<CellBlock cell={props}>
				<CellPrice data={props.data} />
				<Image
					className={style.cellImage}
					data-rotated={
						props.data.direction === 'top' || props.data.direction === 'bottom'
					}
					src={props.data.image}
					alt={'company'}
				/>
				{typeof props.index === 'number' ? (
					<FieldOfChips index={props.index} />
				) : null}
			</CellBlock>
		)
	} else return null
}

export default memo(CommonCell)
