'use client'

import {FC, memo, useEffect, useRef} from 'react'
import CellBlock from '@/components/Session/Cells/CellBlock'
import Image from 'next/image'
import style from '@/components/Session/Cells/Cell.module.scss'
import CellPrice from '@/components/Session/Cells/CellPrice'
import { cellI } from '@/store/interfaces/cell'
import FieldOfChips from '@/components/Session/Chip/FieldOfChips'
import {useAppDispatch, useAppSelector} from '@/store/index'
import { setCompanyPopupHelper } from '@/lib/sessionFunctions'

interface Props {
	data: cellI
}

const UncommonCell: FC<Props> = props => {
	if (props.data.data.type === 'uncommon') {
		const dispatch = useAppDispatch()

		return (
			<CellBlock
				cell={props.data}
				onClick={() =>
					props.data.data.type === 'uncommon' &&
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
						loading={'eager'}
					/>
				</div>
				{typeof props.data.index === 'number' ? (
					<FieldOfChips index={props.data.index} />
				) : null}
			</CellBlock>
		)
	} else return null
}

export default memo(UncommonCell)
