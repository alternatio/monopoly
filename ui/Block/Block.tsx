import { FC, memo, ReactNode } from 'react'
import style from './Block.module.scss'

interface BlockI {
	children: ReactNode
	width: string
}

const Block: FC<BlockI> = props => {
	return (
		<div className={style.block} style={{ width: props.width }}>
			{props.children}
		</div>
	)
}

export default memo(Block)
