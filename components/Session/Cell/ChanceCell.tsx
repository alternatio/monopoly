import { FC, memo } from 'react'
import { cellI } from '@/store/interfaces/cell'
import CellBlock from '@/components/Session/Cell/CellBlock'
import Image from "next/image";
import style from "@/components/Session/Cell/Cell.module.scss";
import {cellsWithPossibleMovesI} from "@/components/Session/Cell/Cell";

const ChanceCell: FC<cellsWithPossibleMovesI> = props => {
	if (props.cell.data?.type === 'chance') {
		return (
			<CellBlock cell={props.cell}>
				<Image
					className={style.cellTaxImage}
					data-rotated={
						props.cell.data.direction === 'top' ||
						props.cell.data.direction === 'bottom'
					}
					src={props.cell.data.image}
					alt={'company'}
				/>
			</CellBlock>
		)
	} else return null
}

export default memo(ChanceCell)
