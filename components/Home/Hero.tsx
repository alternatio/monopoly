import { FC, memo } from 'react'
import style from './Hero.module.scss'

const Hero: FC = () => {
	return (
		<main className={style.main}>
			<span className={style.title}>
				Господство могущество богатство Власть Благо. Вы ведь хотите это?
			</span>
			<div className={style.bottom}>
				<div className={style.divider}>
					<div className={style.circle} />
				</div>
				<span className={style.chineseFont}>中华人民共和国</span>
				<span className={style.text}>Со своими друзьями!</span>
			</div>
		</main>
	)
}

export default memo(Hero)
