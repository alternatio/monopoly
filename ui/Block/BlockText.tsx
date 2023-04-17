import { FC, memo, ReactNode } from 'react'
import style from './Block.module.scss'

interface BlockTextI extends Partial<Pick<HTMLDivElement, 'className'>> {
	children: ReactNode
}

const BlockText: FC<BlockTextI> = props => {
	return (
		<div className={`${style.blockText} ${props.className}`}>
			{props.children}
		</div>
	)
}

export default memo(BlockText)