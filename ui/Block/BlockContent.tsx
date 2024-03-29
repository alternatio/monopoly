import { FC, memo, ReactNode } from 'react'
import style from './Block.module.scss'

interface BlockContentI {
	children: ReactNode
}

const BlockContent: FC<BlockContentI> = props => {
	return (
		<div className={style.content}>
			{props.children}
		</div>
	)
}

export default memo(BlockContent)