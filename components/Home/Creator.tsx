import { FC, memo } from 'react'
import style from './Creator.module.scss'
import Block from '@/ui/Block/Block'
import BlockHeader from '@/ui/Block/BlockHeader'
import BlockText from '@/ui/Block/BlockText'
import BlockAccent from '@/ui/Block/BlockAccent'

const Creator: FC = () => {
	return (
		<div className={style.creator}>
			<Block width={'min(100%, 25rem)'}>
				<BlockHeader leftPart={'О создателе'} rightPart={'关于造物主'} />
				<BlockText>
					Это делал один человек, его контакты можете найти
					чуть ниже.
				</BlockText>
				<BlockText className={style.block}>
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
	)
}

export default memo(Creator)
