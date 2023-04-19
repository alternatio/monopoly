'use client'

import { FC, memo, useState } from 'react'
import style from './Popup.module.scss'
import PopupBlock from '@/components/Popups/PopupBlock'
import Input from '@/ui/Input/Input'
import Button from '@/ui/Button/Button'
import { AnimatePresence } from 'framer-motion'
import { useAppSelector } from '@/store/index'

const EnterInGamePopup: FC = () => {
	const currentPopup = useAppSelector(state => state.popups.currentPopup)

	const [id, setId] = useState('')

	return (
		<AnimatePresence>
			{currentPopup === 3 && (
				<PopupBlock title={''}>
					<Input
						className={style.monoInput}
						onChange={e => setId(e.target.value)}
						autoFocus={true}
						input={{
							placeholder: 'ID',
							value: id,
						}}
					/>
					<div className={style.buttonWithDescription}>
						<Button>Присоединиться</Button>
						<span className={style.description}>
							Также вы можете перейти по ссылке товарища, а не копировать.
						</span>
					</div>
				</PopupBlock>
			)}
		</AnimatePresence>
	)
}

export default memo(EnterInGamePopup)
