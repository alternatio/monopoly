'use client'

import { FC, memo, useState } from 'react'
import style from './Header.module.scss'
import Button from '@/ui/Button/Button'
import Logo from '@/ui/Logo/Logo'
import { AnimatePresence, motion } from 'framer-motion'
import { useHeaderVisible } from '@/lib/useHeaderVisible'
import { commonAnimations, getSpringTransition } from '@/lib/animations'
import { headerVariants } from './variants'

interface HeaderProps {
	maxWidth: string
	scrollPosition?: number
}

const Header: FC<HeaderProps> = props => {
	const [headerVisible, handleHeaderVisible] = useState(true)

	useHeaderVisible(handleHeaderVisible)

	return (
		<div className={style.headerWrapper}>
			<AnimatePresence>
				{headerVisible && (
					<motion.div
						variants={headerVariants}
						{...commonAnimations}
						transition={getSpringTransition(10, 50, .1)}
						style={{ width: `min(100%, ${props.maxWidth})` }}
						className={style.header}>
						<div className={style.part}>
							<Logo />

							<Button className={style.button}>Начать играть</Button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

Header.displayName = 'Header'
export default memo(Header)
