import { FC, memo } from 'react'
import style from './Block.module.scss'

interface HeaderI {
	leftPart: string
	rightPart: string
	marginBottom?: string
}

const BlockHeader: FC<HeaderI> = props => {
	return (
		<header
			className={style.header}
			style={{ marginBottom: props.marginBottom }}>
			<span className={style.leftPart}>{props.leftPart}</span>
			<div className={style.divider} />
			<span className={style.rightPart}>{props.rightPart}</span>
		</header>
	)
}

export default memo(BlockHeader)