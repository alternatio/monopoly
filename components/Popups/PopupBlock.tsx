import { FC, memo, ReactNode } from 'react'
import style from './Popup.module.scss'
import PopupWrapper from '@/components/Popups/PopupWrapper'

interface PopupBlockI {
	children: ReactNode
	title?: string
}

const PopupBlock: FC<PopupBlockI> = props => {
	return (
		<PopupWrapper>
			<div className={style.block}>
				{props.title ? <h3 className={style.blockTitle}>{props.title}</h3> : null}
				<main className={style.main}>{props.children}</main>
			</div>
		</PopupWrapper>
	)
}

export default memo(PopupBlock)
