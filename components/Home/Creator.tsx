import { FC, memo } from 'react'
import style from './Creator.module.scss'
import Block from '@/ui/Block/Block'
import BlockHeader from '@/ui/Block/BlockHeader'
import BlockText from '@/ui/Block/BlockText'
import BlockAccent from '@/ui/Block/BlockAccent'
import Image from 'next/image'
import { creatorCircleImage, creatorPaintImage } from '@/lib/importImage'
import QuestionWrapper from '@/components/Home/QuestionWrapper'

interface CreatorI {
	isVisible: boolean
	index: number
}

const Creator: FC<CreatorI> = props => {
	return (
		<QuestionWrapper isVisible={props.isVisible} index={props.index}>
			<div	className={style.creator}>
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
				<Block width={'min(95%, 28rem)'} className={style.block}>
					<BlockHeader leftPart={'О создателе'} rightPart={'关于造物主'} />
					<BlockText>
						Я пытался сделать вещь, которой приятно пользоваться, получать
						какие-то эмоции 😃. Вы можете мне написать на сколько хорошо мне это
						удалось. Контакты находятся чуть ниже 🤙.
					</BlockText>
					<BlockText className={style.blockText}>
						<BlockAccent type={'link'} href={'https://t.me/Alternati0'}>
							Telegram
						</BlockAccent>
						<span>|</span>
						<BlockAccent type={'link'} href={'https://github.com/alternatio/'}>
							Github
						</BlockAccent>
						<span>|</span>
						<BlockAccent type={'link'} href={'https://vk.com/modiris'}>
							VK
						</BlockAccent>
					</BlockText>
				</Block>
			</div>
		</QuestionWrapper>
	)
}

export default memo(Creator)
