import { FC, memo, useEffect, useState } from 'react'
import style from './styles/Header.module.scss'
import Logo from '../../3ui/Logo/Logo'
import Image from 'next/image'
import { avatarIcon } from '../../helpers/importIcons'
import Button from '../../3ui/Button/Button'
import { AnimatePresence, motion } from 'framer-motion'
import { commonAnimations, commonTransition, getTransition } from '../../helpers/animations'
import { headerT, headerV } from './styles/variants'

interface HeaderProps {
	maxWidth: string
}

const Header: FC<HeaderProps> = props => {
	const [isScrollDown, handleIsScrollDown] =
		useState<boolean>(false)

	useEffect(() => {
		let lastPos = 0
		window.addEventListener('scroll', e => {
			if (scrollY >= lastPos) {
				handleIsScrollDown(true)
			} else {
				handleIsScrollDown(false)
			}
			lastPos = scrollY
		})
	}, [])

	return (
		<div className={style.headerWrapper}>
			<AnimatePresence>
				{!isScrollDown && (
					<motion.div
						variants={headerV}
						{...commonAnimations}
						transition={headerT}
						style={{ width: `min(100%, ${props.maxWidth})` }}
						className={style.header}>
						<div className={style.part}>
							<Logo />
							<div className={style.user}>
								<Image src={avatarIcon} alt={'user'} />
								<Button>Войти</Button>
							</div>
						</div>
						{/*<div className={style.part}>*/}
						{/*	<div className={style.buttons}></div>*/}
						{/*</div>*/}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

Header.displayName = 'Header'
export default memo(Header)
