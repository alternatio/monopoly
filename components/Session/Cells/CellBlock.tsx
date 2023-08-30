import { CSSProperties, FC, memo, ReactNode } from 'react'
import style from './Cell.module.scss'
import { cellI } from '@/store/interfaces/cell'

interface CellBlockI {
	children?: ReactNode
	cell: cellI
	styles?: CSSProperties
	onClick?: () => void
}

const CellBlock: FC<CellBlockI> = props => {
	const correctCellType = props.cell.data.type === 'common' || props.cell.data.type === 'uncommon'

	return (
		<div
			style={{ cursor: correctCellType ? 'pointer' : 'auto', ...getCommonStylesPosition(props.cell), ...props.styles }}
			className={`${style.cell} ${correctCellType ? style.pointerCell : ''}`}
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
