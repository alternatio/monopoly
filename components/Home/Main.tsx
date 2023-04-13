import { FC, memo } from 'react'
import style from './Main.module.scss'
import Image from 'next/image'
import {
	paintImage,
	smallPaint0Image,
	smallPaint1Image,
} from '@/lib/importImage'

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
				<Image
					className={style.paintImage}
					src={paintImage}
					alt={'paintImage'}
				/>
				<span className={style.paintTextFirst}>худ. С. Соколов</span>
			</div>
			<div className={style.smallPaint0}>
				<Image
					className={style.paintImage}
					src={smallPaint0Image}
					alt={'smallPaint0Image'}
				/>
				<span className={style.paintText}>2089 год</span>
			</div>
			<div className={style.smallPaint1}>
				<Image
					className={style.paintImage}
					src={smallPaint1Image}
					alt={'smallPaint1Image'}
				/>
				<div className={style.paintBlockBottom}>
					<span className={style.paintTextBottom}>
						Многие иллюстрации сделаны - искусственным интеллектом - artificial intelligence
					</span>
					<div className={style.square} />
				</div>
			</div>
			<div className={style.circle}>社会主义</div>
			<div className={style.textBlock}>
				<span className={style.textBlockFirst}>
					Почему вы должны попробовать?
				</span>
				<span className={style.textBlockSecond}>
					<span className={style.serif}>
						<span className={style.italic}>Vogue,</span> Style and{' '}
						<span className={style.italic}>mainstream.</span>
					</span>
				</span>
				<span className={style.textBlockThird}>
					<span className={`${style.serif} ${style.italic}`}>нужно почувствовать :)</span>
				</span>
			</div>
		</main>
	)
}

Main.displayName = 'Main'
export default memo(Main)
