'use client'

import { FC, memo } from 'react'
import style from './Cell.module.scss'
import CellBlock from '@/components/Session/Cells/CellBlock'
import Image from 'next/image'
import CellPrice from '@/components/Session/Cells/CellPrice'
import { cellI } from '@/store/interfaces/cell'
import FieldOfChips from '@/components/Session/Chip/FieldOfChips'
import { setCompanyPopupHelper } from '@/lib/sessionFunctions'
import { useAppDispatch } from '@/store/index'

interface Props {
	data: cellI
}

const CommonCell: FC<Props> = props => {
	if (props.data.data.type === 'common') {
		const dispatch = useAppDispatch()

		return (
			<CellBlock
				cell={props.data}
				onClick={() =>
					props.data.data.type === 'common' &&
					setCompanyPopupHelper(dispatch, props.data.data)
				}>
				<CellPrice data={props.data.data} />
				<div className={style.cellImageWrapper}>
					<Image
						className={style.cellImage}
						data-rotated={
							props.data.data.direction === 'top' ||
							props.data.data.direction === 'bottom'
						}
						src={props.data.data.image}
						alt={'company'}
					/>
				</div>
				{typeof props.data.index === 'number' ? (
					<FieldOfChips index={props.data.index} />
				) : null}
			</CellBlock>
		)
	} else return null
}

export default memo(CommonCell)
