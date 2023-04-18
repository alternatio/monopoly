import { FC, memo } from 'react'
import style from './Creator.module.scss'
import Block from '@/ui/Block/Block'
import BlockHeader from '@/ui/Block/BlockHeader'
import BlockText from '@/ui/Block/BlockText'
import BlockAccent from '@/ui/Block/BlockAccent'
import Image from "next/image";
import {creatorCircleImage, creatorPaintImage} from "@/lib/importImage";
import {AnimatePresence, motion} from "framer-motion";

interface CreatorI {
	isVisible: boolean
}

const Creator: FC<CreatorI> = props => {
	return (
		<AnimatePresence>
			{props.isVisible && (
				<motion.div className={style.creator}>
					<div className={style.back}>
						<Image className={style.creatorCircle} src={creatorCircleImage} alt={'creatorCircleImage'} />
						<Image className={style.creatorPaint} src={creatorPaintImage} alt={'creatorPaintImage'} />
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
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default memo(Creator)
