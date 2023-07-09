import { FC, memo } from 'react'
import CellBlock from '@/components/Session/Cell/CellBlock'
import Image from 'next/image'
import style from '@/components/Session/Cell/Cell.module.scss'
import {cellI} from "@/store/interfaces/cell";
import FieldOfChips from "@/components/Session/Chip/FieldOfChips";

interface Props {
	data: cellI
}

const TaxCell: FC<Props> = props => {
	if (props.data.data?.type === 'tax') {
		return (
			<CellBlock cell={props.data}>
				<Image
					className={style.cellImage}
					data-rotated={
						props.data.data.direction === 'top' ||
						props.data.data.direction === 'bottom'
					}
					src={props.data.data.image}
					alt={'company'}
				/>
				{typeof props.data.index === 'number' ? (
					<FieldOfChips index={props.data.index} />
				) : null}
			</CellBlock>
		)
	} else return null
}

export default memo(TaxCell)
