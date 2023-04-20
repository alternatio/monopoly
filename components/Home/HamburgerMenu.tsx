'use client'

import { FC, memo } from 'react'
import style from './Hamburger.module.scss'
import { useAppDispatch, useAppSelector } from '@/store/index'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '@/ui/Button/Button'
import { setCurrentPopup } from '@/store/reducers/popups'
import { commonAnimations, getSpringTransition } from '@/lib/animations'
import { hamburgerMenuV } from '@/components/Home/variants'
import Image from 'next/image'
import { signOutWithGooglePopup } from '@/store/firestore/controller'
import { setUserData } from '@/store/reducers/user'
import { userDataI } from '@/store/interfaces/user'

const HamburgerMenu: FC = () => {
	const hamburgerIsOpen = useAppSelector(state => state.hamburger.isOpen)
	const userData = useAppSelector(state => state.user.data)

	const dispatch = useAppDispatch()

	const setUser = (state: userDataI) => {
		dispatch(setUserData(state))
	}

	return (
		<div className={style.menuWrapper}>
			<div className={style.menuInnerWrapper}>
				<AnimatePresence>
					{hamburgerIsOpen && (
						<motion.div
							variants={hamburgerMenuV}
							{...commonAnimations}
							transition={getSpringTransition(20, 60)}
							className={style.menu}>
							{!userData.uid && (
								<Button
									className={style.menuButton}
									onClick={() => dispatch(setCurrentPopup(0))}>
									Войти в аккаунт
								</Button>
							)}
							{userData?.uid && (
								<>
									<div className={style.info}>
										{userData.name && userData.email && (
											<div className={style.nameAndEmail}>
												<span className={style.name}>{userData.name}</span>
												<span className={style.email}>{userData.email}</span>
											</div>
										)}
										{userData.avatar && (
											<Image
												className={style.avatar}
												src={userData.avatar}
												alt={'avatar'}
												width={50}
												height={50}
											/>
										)}
									</div>
									<Button
										className={style.menuButton}
										onClick={() => dispatch(setCurrentPopup(1))}>
										Играть ▶
									</Button>
									<Button
										className={`${style.menuButton} ${style.redMenuButton}`}
										onClick={async () => await signOutWithGooglePopup(setUser)}>
										Выйти из аккаунта 💨
									</Button>
								</>
							)}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}

export default memo(HamburgerMenu)
