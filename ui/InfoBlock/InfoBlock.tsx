import { FC, memo, ReactNode } from 'react'
import style from './styles/InfoBlock.module.scss'

interface InfoBlockI {
	title?: string
	serifTitle?: string
	postTitle?: string
	children?: ReactNode
	className?: string
}

const InfoBlock: FC<InfoBlockI> = (props) => {
	return (
		<div className={`${style.infoBlock} ${props.className}`}>
			<div className={style.head}>
				<span className={style.title}>
					{props.title}
					<span className={style.serifTitle}>
						{props.serifTitle}
					</span>
				</span>
				<div className={style.divider}/>
				<span className={style.postTitle}>
					{props.postTitle}
				</span>
			</div>
			{props.children}
		</div>
	)
}

export default memo(InfoBlock)