import { FC, memo, useEffect, useState } from 'react'
import style from './styles/Header.module.scss'
import Logo from '../../3ui/Logo/Logo'
import Button from '../../3ui/Button/Button'
import { AnimatePresence, motion } from 'framer-motion'
import { getSpringTransition } from '../../helpers/animations'

interface HeaderProps {
	maxWidth: string
}

const Header: FC<HeaderProps> = props => {
	const [isScrollDown, handleIsScrollDown] = useState(false)

	useEffect(() => {
		document.addEventListener('wheel', (e) => {
			if (e.deltaY < 0) {
				handleIsScrollDown(false)
			} else {
				handleIsScrollDown(true)
			}
		})
	}, [])

	return (
		<div className={style.headerWrapper}>
			<AnimatePresence>
				<motion.div
					onHoverStart={() => handleIsScrollDown(false)}
					animate={isScrollDown ? {y: '-80%'} : {y: '0%'}}
					style={{ width: `min(100%, ${props.maxWidth})` }}
					transition={getSpringTransition()}
					className={style.header}>
					<div className={style.part}>
						<Logo />
						<div className={style.rightPart}>
							<Button className={style.button}>
								Начать играть
							</Button>
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	)
}

Header.displayName = 'Header'
export default memo(Header)
