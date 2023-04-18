import { FC, memo } from 'react'
import style from './Creator.module.scss'
import Block from '@/ui/Block/Block'
import BlockHeader from '@/ui/Block/BlockHeader'
import BlockText from '@/ui/Block/BlockText'
import BlockAccent from '@/ui/Block/BlockAccent'
import Image from 'next/image'
import { creatorCircleImage, creatorPaintImage } from '@/lib/importImage'
import { motion } from 'framer-motion'
import { questionVariants } from '@/components/Home/variants'
import { getSpringTransition } from '@/lib/animations'

interface CreatorI {
	isVisible: boolean
}

const Creator: FC<CreatorI> = props => {
	return (
		<motion.div
			variants={questionVariants}
			animate={props.isVisible ? 'on' : 'off'}
			transition={getSpringTransition(20, 60)}>
			<div className={style.creator}>
				<div className={style.back}>
					<Image
						className={style.creatorCircle}
						src={creatorCircleImage}
						alt={'creatorCircleImage'}
					/>
					<Image
						className={style.creatorPaint}
						src={creatorPaintImage}
						alt={'creatorPaintImage'}
					/>
				</div>
				<Block width={'min(100%, 28rem)'} className={style.block}>
					<BlockHeader leftPart={'О создателе'} rightPart={'关于造物主'} />
					<BlockText>
						Я пытался сделать вещь, которой приятно пользоваться, получать
						какие-то эмоции. Вы можете мне написать на сколько хорошо мне это
						удалось. Контакты находятся чуть ниже.
					</BlockText>
					<BlockText className={style.blockText}>
						<BlockAccent type={'link'} href={'#'}>
							Telegram
						</BlockAccent>
						<span>|</span>
						<BlockAccent type={'link'} href={'#'}>
							Github
						</BlockAccent>
						<span>|</span>
						<BlockAccent type={'link'} href={'#'}>
							VK
						</BlockAccent>
					</BlockText>
				</Block>
			</div>
		</motion.div>
	)
}

export default memo(Creator)