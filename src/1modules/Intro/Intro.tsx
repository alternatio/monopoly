import React, { FC, memo } from 'react'
import style from './styles/Intro.module.scss'
import Marquee from '../../3ui/Marquee/Marquee'

interface IntroProps {}

const Intro: FC<IntroProps> = props => {
	return (
		<div className={style.intro}>
			<Marquee>
				垄断•могущество•优势•богатство•财富•власть•
			</Marquee>
			<div className={style.introBottom}>
				<div className={style.divider} />
        <div className={style.chineseText}>
          中华人民共和国
        </div>
        <div className={style.russianText}>
					Со своими друзьями!
        </div>
				<div className={style.circle}/>
			</div>
		</div>
	)
}

Intro.displayName = 'Intro'
export default memo(Intro)
