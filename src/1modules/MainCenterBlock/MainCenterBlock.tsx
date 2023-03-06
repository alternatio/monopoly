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
				className={style.leftImage}>
				<Image
					src={leftImage}
					alt={'leftImage'}
					width={1024}
					height={1024}
				/>
				<span className={style.text}>2089 год</span>
			</motion.div>
			<div className={style.circle}>社会主义</div>
			<motion.div
				className={style.rightImage}>
				<Image
					src={rightImage}
					alt={'rightImage'}
					width={1024}
					height={1024}
				/>
				<div className={style.rightText}>
					<span className={style.rightTextMono}>
						Многие иллюстрации сделаны искусственным интеллектом
					</span>
					<div className={style.cube}/>
				</div>
			</motion.div>
			<div className={style.bottomText}>
				<div className={style.bottomTextTitle}>
					Почему вы должны поиграть?{' '}
					<div className={style.textCircle} />
				</div>
				<div className={style.bottomTextMain}>
					<span>
						Это{' '}
						<span className={style.serifItalic}>
							Vogue,
						</span>{' '}
						<span className={style.serif}>Style and</span>{' '}
						<span className={style.serifItalic}>
							mainstream
						</span>
						.
					</span>
					<span>Это нужно почувствовать :)</span>
				</div>
			</div>
		</div>
	)
}

MainCenterBlock.displayName = 'MainCenterBlock'
export default memo(MainCenterBlock)
