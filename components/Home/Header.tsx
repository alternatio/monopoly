'use client'

import { FC, memo, useEffect, useState } from 'react'
import style from './Header.module.scss'
import Button from '@/ui/Button/Button'
import Logo from '@/ui/Logo/Logo'
import { AnimatePresence, motion } from 'framer-motion'
import { useHeaderVisible } from '@/lib/useHeaderVisible'
import { commonAnimations, getSpringTransition } from '@/lib/animations'
import { headerVariants } from './variants'
import { useAppDispatch, useAppSelector } from '@/store/index'
import { signInWithGooglePopup } from '@/store/firestore/controller'
import {userDataI} from "@/store/interfaces/user";
import {setUserData} from "@/store/reducers/user";
import {setCurrentPopup} from "@/store/reducers/popups";

interface HeaderProps {
	maxWidth: string
	scrollPosition?: number
}

const Header: FC<HeaderProps> = props => {
	const [headerVisible, handleHeaderVisible] = useState(true)
	const [withoutName, handleWithoutName] = useState(false)

	const dispatch = useAppDispatch()
	const userData = useAppSelector(state => state.user.data)

	useHeaderVisible(handleHeaderVisible)

	const onResize = () => {
		if (innerWidth < 500) {
			handleWithoutName(true)
		} else {
			handleWithoutName(false)
		}
	}

	useEffect(() => {
		window.addEventListener('resize', onResize)
		onResize()
		return () => window.removeEventListener('resize', onResize)
	}, [])

	return (
		<div className={style.headerWrapper}>
			<AnimatePresence>
				{headerVisible && (
					<motion.div
						variants={headerVariants}
						{...commonAnimations}
						transition={getSpringTransition(10, 50, 0.1)}
						style={{ width: `min(100%, ${props.maxWidth})` }}
						className={style.header}>
						<div className={style.part}>
							<Logo className={style.logo} withoutName={withoutName} />
							<Button
								className={style.button}
								onClick={() => {
									if (!userData) {
										dispatch(setCurrentPopup(0))
									}
								}}>
								Начать играть
							</Button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

Header.displayName = 'Header'
export default memo(Header)
