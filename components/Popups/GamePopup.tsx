'use client'

import { FC, memo } from 'react'
import style from './Popup.module.scss'
import PopupBlock from '@/components/Popups/PopupBlock'
import Button from '@/ui/Button/Button'
import { useAppSelector } from '@/store/index'
import { AnimatePresence } from 'framer-motion'

const GamePopup: FC = () => {
	const currentPopup = useAppSelector(state => state.popups.currentPopup)

	return (
		<AnimatePresence>
			{currentPopup === 1 && (
				<PopupBlock title={''}>
					<Button className={style.button}>Создать</Button>
					<Button className={style.button}>Присоединиться</Button>
				</PopupBlock>
			)}
		</AnimatePresence>
	)
}

export default memo(GamePopup)
