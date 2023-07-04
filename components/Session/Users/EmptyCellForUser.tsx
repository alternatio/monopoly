'use client'

import { FC, memo } from 'react'
import style from './Users.module.scss'
import Image from 'next/image'
import { avatarIcon } from '@/lib/ImportIcons'
import { useAppDispatch } from '@/store/index'
import {PayloadMiniPopupTextI, pushMiniPopupTexts} from '@/store/reducers/popups'
import {sessionI} from "@/store/interfaces/session";

interface EmptyCellForUserProps {
	sessionData: Partial<sessionI>
}

const EmptyCellForUser: FC<EmptyCellForUserProps> = props => {
	const dispatch = useAppDispatch()
	return (
		<div
			className={`${style.user} ${style.emptyUser}`}
			onClick={() => {
				const text: PayloadMiniPopupTextI = {
					body: 'ID сессии скопирован!',
					type: 'green'
				}
				dispatch(pushMiniPopupTexts(text))
				try {
					navigator.clipboard.writeText(`${props.sessionData?.id}`);
				} catch (error) {
					console.error('Не удалось скопировать информацию в буфер обмена', error);
				}
			}}>
			<Image
				className={style.emptyAvatar}
				src={avatarIcon}
				alt={'avatarIcon'}
			/>
			<span className={style.description}>
				Нажмите, чтобы скопировать ID сессии
			</span>
		</div>
	)
}

export default memo(EmptyCellForUser)
