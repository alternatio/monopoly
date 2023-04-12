import { FC, memo } from 'react'
import style from './Main.module.scss'
import Image from 'next/image'
import { paintImage, smallPaint0Image } from '@/lib/importImage'

const Main: FC = () => {
	return (
		<main className={style.main}>
			<div className={style.firstText}>
				Игра происходит в{' '}
				<span className={style.accent}>Китайской Народной Республике.</span>{' '}
				Недалёкое будущее. Ваша задача укрепить экономику своей страны,
				разбогатеть и получить статус китайского монополиста
			</div>
			<div className={style.paint}>
				<Image className={style.paintImage} src={paintImage} alt={'paintImage'} />
			</div>
			<div className={style.smallPaint0}>
				<Image className={style.paintImage} src={smallPaint0Image} alt={'smallPaint0Image'} />
			</div>
		</main>
	)
}

Main.displayName = 'Main'
export default memo(Main)
