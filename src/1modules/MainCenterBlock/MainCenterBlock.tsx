import { FC, memo } from 'react'
import style from './styles/MainCenterBlock.module.scss'
import Image from 'next/image'
import {
	leftImage,
	paintImage,
	rightImage,
} from '../../helpers/importIcons'
import { motion } from 'framer-motion'
import { getSpringTransition } from '../../helpers/animations'

interface MainCenterBlockProps {}

const commonAnimationOnView = {
	initial: { opacity: 0 },
	whileInView: { opacity: 1 },
	transition: getSpringTransition(4, 20),
}

const MainCenterBlock: FC<MainCenterBlockProps> = props => {
	return (
		<div className={style.mainCenterBlock}>
			<motion.div
				{...commonAnimationOnView}
				className={style.mainText}>
				Игра происходит в{' '}
				<span className={style.accent}>
					Китайской Народной Республике
				</span>
				. Недалёкое будущее. Ваша задача укрепить экономику
				своей страны, разбогатеть и получить статус
				китайского монополиста
			</motion.div>
			<motion.div
				{...commonAnimationOnView}
				className={style.paint}>
				<div className={style.image}>
					<Image
						src={paintImage}
						alt={'paint'}
						width={1400}
						height={1800}
					/>
				</div>
				<span className={style.text}>худ. С. Соколов</span>
			</motion.div>
			<motion.div
				{...commonAnimationOnView}
				className={style.leftImage}>
				<Image
					src={leftImage}
					alt={'leftImage'}
					width={1024}
					height={1024}
				/>
			</motion.div>
			<div
				className={style.circle}>
				社会主义
			</div>
			<motion.div
				{...commonAnimationOnView}
				className={style.rightImage}>
				<Image
					src={rightImage}
					alt={'rightImage'}
					width={1024}
					height={1024}
				/>
			</motion.div>
		</div>
	)
}

MainCenterBlock.displayName = 'MainCenterBlock'
export default memo(MainCenterBlock)
