import { FC, memo } from 'react'
import CellBlock from '@/components/Session/Cell/CellBlock'
import Image from 'next/image'
import style from '@/components/Session/Cell/Cell.module.scss'
import {cellI} from "@/store/interfaces/cell";
import FieldOfChips from "@/components/Session/Chip/FieldOfChips";

const TaxCell: FC<cellI> = props => {
	if (props.data?.type === 'tax') {
		return (
			<CellBlock cell={props}>
				<Image
					className={style.cellImage}
					data-rotated={
						props.data.direction === 'top' ||
						props.data.direction === 'bottom'
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

export default memo(TaxCell)
