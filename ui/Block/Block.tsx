import { FC, memo, ReactNode } from 'react'
import style from './Block.module.scss'

interface BlockI extends Partial<Pick<HTMLDivElement, 'className'>> {
	children?: ReactNode
	width: string
}

const Block: FC<BlockI> = props => {
	return (
		<div className={`${style.block} ${props.className}`} style={{ width: props.width }}>
			{props.children}
		</div>
	)
}

export default memo(Block)
