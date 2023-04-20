import { FC, memo } from 'react'
import style from './Hamburger.module.scss'
import { useAppDispatch, useAppSelector } from '@/store/index'
import { toggleHamburgerOpen } from '@/store/reducers/hamburger'
import { motion } from 'framer-motion'
import { getSpringTransition } from '@/lib/animations'

const HamburgerButton: FC = () => {
	const dispatch = useAppDispatch()

	const hamburgerIsOpen = useAppSelector(state => state.hamburger.isOpen)

	return (
		<div
			className={style.hamburgerButton}
			onClick={() => dispatch(toggleHamburgerOpen())}>
			<motion.div
				className={style.stick}
				transition={getSpringTransition(20, 140)}
				animate={
					hamburgerIsOpen
						? { rotate: '45deg', y: 0, width: '60%' }
						: { rotate: '0deg', y: '-.25rem', width: '80%' }
				}
			/>
			<motion.div
				className={style.stick}
				transition={getSpringTransition(20, 140)}
				animate={
					hamburgerIsOpen
						? { rotate: '-45deg', y: 0, width: '60%' }
						: { rotate: '0deg', y: '.25rem', width: '80%' }
				}
			/>
		</div>
	)
}

export default memo(HamburgerButton)
