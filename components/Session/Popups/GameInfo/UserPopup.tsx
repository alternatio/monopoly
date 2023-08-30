'use client'

import { FC, memo, useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/index'
import { AnimatePresence, motion } from 'framer-motion'
import style from '../Popups.module.scss'
import { commonAnimations, getSpringTransition } from '@/lib/animations'
import { sessionPopupV } from '@/components/Session/Popups/variants'
import { useOnClickOutside } from '@/lib/hooks/useOnClickOutside'
import { setUserPopup } from '@/store/reducers/session'
import UserPopupBody from '@/components/Session/Popups/GameInfo/UserPopupBody'
import Loader from '@/ui/Loader/Loader'

const UserPopup: FC = () => {
	const currentUser = useAppSelector(state => state.user)
	const user = useAppSelector(state => state.session.userPopup)
	const [loading, handleLoading] = useState<boolean>(false)
	const ref = useRef<HTMLDivElement | null>(null)

	const dispatch = useAppDispatch()

	useOnClickOutside(ref, () => dispatch(setUserPopup(null)))

	useEffect(() => {
		handleLoading(true)
		setTimeout(() => {
			handleLoading(false)
		}, 100)
	}, [user])

	return (
		<AnimatePresence initial={false}>
			{user ? (
				<motion.div
					className={style.popup}
					ref={ref}
					{...commonAnimations}
					variants={sessionPopupV}
					// style={{ minHeight: '10rem' }}
					// style={{ alignItems: 'center' }}
					transition={getSpringTransition(40, 300, 0.15)}>
					{loading ? <Loader /> : <UserPopupBody user={user} currentUser={currentUser} />}
				</motion.div>
			) : null}
		</AnimatePresence>
	)
}

export default memo(UserPopup)
