import { FC, memo, ReactNode } from 'react'
import style from './Popup.module.scss'
import { useAppDispatch } from '@/store/index'
import { setCurrentPopup } from '@/store/reducers/popups'
import { motion } from 'framer-motion'
import {
	commonAnimations,
	getEaseTransition,
	getSpringTransition,
} from '@/lib/animations'
import { wrapperV } from '@/components/Popups/variants'

interface PopupWrapperI {
	children: ReactNode
}

const PopupWrapper: FC<PopupWrapperI> = props => {
	const dispatch = useAppDispatch()

	return (
		<motion.div
			variants={wrapperV}
			{...commonAnimations}
			transition={getEaseTransition(0.3, 'easeInOut', 0)}
			className={style.wrapper}>
			<div
				className={style.wrapperHandle}
				onClick={() => dispatch(setCurrentPopup(-1))}
			/>
			{props.children}
		</motion.div>
	)
}

export default memo(PopupWrapper)
