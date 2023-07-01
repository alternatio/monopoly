'use client'

import { CSSProperties, FC, memo, useEffect } from 'react'
import style from './Popup.module.scss'
import { useAppDispatch } from '@/store/index'
import { filterPopupTexts, MiniPopupTextI } from '@/store/reducers/popups'
import { motion } from 'framer-motion'
import { miniPopupV } from '@/components/Popups/variants'
import { getEaseTransition } from '@/lib/animations'

export interface MiniPopupProps {
	type: 'green' | 'white' | 'black' | 'red'
	text: MiniPopupTextI
	time?: number
}

interface PopupStylesI {
	type: MiniPopupProps['type']
	style: CSSProperties
}

const MiniPopup: FC<MiniPopupProps> = props => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		setTimeout(() => {
			dispatch(filterPopupTexts(props.text.id))
		}, props.time ? props.time : 3500)
	})

	const popupStyles: PopupStylesI[] = [
		{
			type: 'green',
			style: {
				background: 'var(--colorGreen)',
				color: 'var(--colorWhite)',
			},
		},
		{
			type: 'white',
			style: {
				background: 'var(--colorWhite)',
				color: 'var(--colorBlack)',
			},
		},
		{
			type: 'black',
			style: {
				background: 'var(--colorWhite)',
				color: 'var(--colorBlack)',
				border: 'var(--colorStroke) solid 1px',
			},
		},
		{
			type: 'red',
			style: {
				background: 'var(--colorRed)',
				color: 'var(--colorWhite)',
			},
		},
	]

	return (
		<motion.div
			initial={'off'}
			animate={'on'}
			exit={'off'}
			variants={miniPopupV}
			transition={getEaseTransition(0.5)}
			className={style.miniPopup}
			style={
				popupStyles.find(popupStyle => popupStyle.type === props.type)?.style
			}>
			<span className={style.miniPopupText} style={{color: popupStyles.find(popupStyle => popupStyle.type === props.type)?.style.color}}>{props.text.body}</span>
		</motion.div>
	)
}

export default memo(MiniPopup)
