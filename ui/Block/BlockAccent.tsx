import { FC, memo, ReactNode } from 'react'
import style from './Block.module.scss'
import Link from 'next/link'

interface BlockAccentI {
	children: ReactNode
	type: 'button' | 'link' | 'accent'
	href?: string
	onClick?: CallableFunction
}

const BlockAccent: FC<BlockAccentI> = props => {
	if (props.type === 'link' && props.href) {
		return (
			<Link className={style.link} href={props.href}>
				{props.children}
			</Link>
		)
	} else if (props.type === 'button' && props.onClick) {
		return (
			<button className={style.link}>
				{props.children}
			</button>
		)
	} else if (props.type === 'accent') {
		return (
			<span className={style.accent}>
				{props.children}
			</span>
		)
	} else {
		return <>BlockAccentIsNULL</>
	}
}

export default memo(BlockAccent)