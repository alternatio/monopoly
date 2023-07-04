import { FC, memo } from 'react'
import { cellI } from '@/store/interfaces/cell'
import CellBlock from '@/components/Session/Cell/CellBlock'
import Image from "next/image";
import style from "@/components/Session/Cell/Cell.module.scss";

const ChanceCell: FC<cellI> = props => {
	if (props.data?.type === 'chance') {
		return (
			<CellBlock cell={props}>
				<Image
					className={style.cellTaxImage}
					data-rotated={
						props.data.direction === 'top' ||
						props.data.direction === 'bottom'
					}
					src={props.data.image}
					alt={'company'}
				/>
			</CellBlock>
		)
	} else return null
}

export default memo(ChanceCell)
