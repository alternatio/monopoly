'use client'

import { FC, memo } from 'react'
import style from './Popup.module.scss'
import PopupBlock from '@/components/Popups/PopupBlock'
import Button from '@/ui/Button/Button'
import { useAppDispatch, useAppSelector } from '@/store/index'
import { AnimatePresence } from 'framer-motion'
import { setCurrentPopup } from '@/store/reducers/popups'

const GamePopup: FC = () => {
	const currentPopup = useAppSelector(state => state.popups.currentPopup)

	const dispatch = useAppDispatch()

	return (
		<AnimatePresence>
			{currentPopup === 1 && (
				<PopupBlock title={'Что будем делать?'}>
					<Button
						className={style.button}
						onClick={() => dispatch(setCurrentPopup(2))}>
						Создать
					</Button>
					<Button
						className={style.button}
						onClick={() => dispatch(setCurrentPopup(3))}>
						Присоединиться
					</Button>
				</PopupBlock>
			)}
		</AnimatePresence>
	)
}

export default memo(GamePopup)
