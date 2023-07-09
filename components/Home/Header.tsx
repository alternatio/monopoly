'use client'

import { FC, memo, useEffect, useState } from 'react'
import style from './Header.module.scss'
import Button from '@/ui/Button/Button'
import Logo from '@/ui/Logo/Logo'
import { AnimatePresence, motion } from 'framer-motion'
import { useHeaderVisible } from '@/lib/hooks/useHeaderVisible'
import { commonAnimations, getSpringTransition } from '@/lib/animations'
import { headerVariants } from './variants'
import { useAppDispatch, useAppSelector } from '@/store/index'
import { setCurrentPopup } from '@/store/reducers/popups'
import HamburgerButton from '@/components/Home/HamburgerButton'
import HamburgerMenu from '@/components/Home/HamburgerMenu'
import { setHamburgerOpen } from '@/store/reducers/hamburger'
import MiniPopups from '@/components/Popups/MiniPopups'
import MiniPopup from '@/components/Popups/MiniPopup'

interface HeaderProps {
	maxWidth: string
	scrollPosition?: number
}

const Header: FC<HeaderProps> = props => {
	const [headerVisible, handleHeaderVisible] = useState(true)
	const [withoutName, handleWithoutName] = useState(false)

	const dispatch = useAppDispatch()
	const userData = useAppSelector(state => state.user.data)
	const hamburgerIsOpen = useAppSelector(state => state.hamburger.isOpen)
	const miniPopupTexts = useAppSelector(state => state.popups.miniPopupTexts)

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

	useEffect(() => {
		dispatch(setCurrentPopup(-1))
	}, [userData?.uid])

	useEffect(() => {
		if (!headerVisible) {
			dispatch(setHamburgerOpen(headerVisible))
		}
	}, [headerVisible])

	return (
		<>
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
								{/*<Button*/}
								{/*	className={style.button}*/}
								{/*	onClick={() => {*/}
								{/*		if (!userData?.uid) {*/}
								{/*			dispatch(setCurrentPopup(0))*/}
								{/*		} else {*/}
								{/*			dispatch(setCurrentPopup(1))*/}
								{/*		}*/}
								{/*	}}>*/}
								{/*	Начать играть*/}
								{/*</Button>*/}

								<HamburgerButton />
							</div>
						</motion.div>
					)}
				</AnimatePresence>
				<HamburgerMenu />
			</div>

			<MiniPopups>
				<AnimatePresence>
					{miniPopupTexts.map(text => {
						return <MiniPopup key={text.id} type={text.type} text={text} />
					})}
				</AnimatePresence>
			</MiniPopups>
		</>
	)
}

Header.displayName = 'Header'
export default memo(Header)
