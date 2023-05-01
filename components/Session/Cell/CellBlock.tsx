import { CSSProperties, FC, memo, ReactNode } from 'react'
import style from './Cell.module.scss'
import { cellI } from '@/store/interfaces/cell'

interface CellBlockI {
	children?: ReactNode
	cell: cellI
}

const CellBlock: FC<CellBlockI> = ({ children, cell }) => {
	return (
		<div style={getCommonStylesPosition(cell)} className={style.cell}>
			<div className={style.cellData}>
				{children}
			</div>
		</div>
	)
}

const getCommonStylesPosition = (props: cellI): CSSProperties => {
	return {
		gridColumn: `${props.position[0]}/${props.position[1]}`,
		gridRow: `${props.position[2]}/${props.position[3]}`,
	}
}

export const getCommonStylesRotation = (props: cellI): CSSProperties => {
	return {
		transform:
			props.data.direction === 'top' || props.data.direction === 'bottom'
				? 'rotate(90deg)'
				: undefined,
	}
}

export default memo(CellBlock)
