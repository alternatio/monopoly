import Link from 'next/link'
import style from './styles/InfoLink.module.scss'
import { FC, memo, ReactNode } from 'react'

interface InfoLinkI {
	href: string
	children?: ReactNode
}

const InfoLink: FC<InfoLinkI> = props => {
	return (
		<Link href={props.href} className={style.infoLink}>
			{props.children}
		</Link>
	)
}

InfoLink.displayName = 'InfoLink'
export default memo(InfoLink)
