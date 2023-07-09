import { FC, memo } from 'react'
import { cellI } from '@/store/interfaces/cell'
import CellBlock from '@/components/Session/Cell/CellBlock'
import Image from "next/image";
import style from "@/components/Session/Cell/Cell.module.scss";
import FieldOfChips from "@/components/Session/Chip/FieldOfChips";

interface Props {
	data: cellI
}

const ChanceCell: FC<Props> = props => {
	if (props.data.data?.type === 'chance') {
		return (
			<CellBlock cell={props.data}>
				<Image
					className={style.cellTaxImage}
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

export default memo(ChanceCell)
