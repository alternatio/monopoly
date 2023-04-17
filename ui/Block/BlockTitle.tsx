import { FC, memo, ReactNode } from 'react'
import style from './Block.module.scss'

interface BlockTitleI extends Partial<Pick<HTMLDivElement, 'className'>> {
	children: ReactNode
}

const BlockTitle: FC<BlockTitleI> = props => {
	return (
		<span className={`${style.title} ${props.className}`}>
			{props.children}
		</span>
	)
}

export default memo(BlockTitle)
