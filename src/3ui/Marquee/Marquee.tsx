import { motion } from 'framer-motion'
import { FC, memo, ReactNode, useEffect, useRef, useState } from 'react'
import style from './styles/Marquee.module.scss'

interface MarqueeProps {
	children?: ReactNode
}

const Marquee: FC<MarqueeProps> = props => {
	const ref = useRef<null | HTMLDivElement>(null)
	const [scrollWidth, setScrollWidth] = useState(0)

	useEffect(() => {
		if (ref.current?.scrollWidth) {
			setScrollWidth(ref.current.scrollWidth)
		}
	}, [ref])

	return (
		<div className={style.marqueeWrapper}>
			<motion.div
				ref={ref}
				initial={{x: `-400px`}}
				animate={{x: `-${scrollWidth / 1.5}px`}}
				transition={{
					repeat: Infinity,
					repeatType: 'mirror',
					duration: 10,
					ease: 'linear'
				}}
				className={style.marquee}>
				{props.children}{props.children}
			</motion.div>
		</div>
	)
}

Marquee.displayName = 'Marquee'
export default memo(Marquee)
