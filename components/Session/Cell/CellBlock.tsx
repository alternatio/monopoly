'use client'

import { CSSProperties, FC, memo, ReactNode, useRef } from 'react'
import style from './Cell.module.scss'
import { cellI } from '@/store/interfaces/cell'
import { useOnClickOutside } from '@/lib/hooks/useOnClickOutside'

interface CellBlockI {
	children?: ReactNode
	cell: cellI
	styles?: CSSProperties
	onClick?: () => void
}

const CellBlock: FC<CellBlockI> = props => {
	return (
		<div
			style={{ ...getCommonStylesPosition(props.cell), ...props.styles }}
			className={style.cell}
			onClick={props.onClick}>
			<div className={style.cellData}>{props.children}</div>
		</div>
	)
}

const getCommonStylesPosition = (props: cellI): CSSProperties => {
	return {
		gridColumn: `${props.position[0]}/${props.position[1]}`,
		gridRow: `${props.position[2]}/${props.position[3]}`,
	}
}

export default memo(CellBlock)
