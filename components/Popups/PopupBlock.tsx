import {CSSProperties, FC, memo, ReactNode} from 'react'
import style from './Popup.module.scss'
import PopupWrapper from '@/components/Popups/PopupWrapper'

interface PopupBlockI {
	children: ReactNode
	title?: string
	style?: CSSProperties
}

const PopupBlock: FC<PopupBlockI> = props => {
	return (
		<PopupWrapper>
			<div className={style.block} style={props.style}>
				{props.title ? <h3 className={style.blockTitle}>{props.title}</h3> : null}
				<main className={style.main}>{props.children}</main>
			</div>
		</PopupWrapper>
	)
}

export default memo(PopupBlock)
