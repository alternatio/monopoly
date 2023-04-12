'use client'

import { FC, memo, useState } from 'react'
import style from './Hero.module.scss'
import { useVariableText } from '@/lib/useVariableTitle'
import { random } from '@/lib/commonFunctions'

const Hero: FC = () => {
	const arrayOfVariablesTexts = [
		'用策略统治市场',
		'与财富为伍，笑傲人生',
		'华丽经商，享受成功',
		'一起玩吧！财富就在前方！',
		'独一无二的富豪体验！',
		'感受财富的喜悦！',
	]

	const [text1, setText1] = useState<string>(arrayOfVariablesTexts[0])
	const [text2, setText2] = useState<string>(arrayOfVariablesTexts[1])

	useVariableText(setText1, 2000, arrayOfVariablesTexts)
	useVariableText(setText2, 4000, arrayOfVariablesTexts)

	return (
		<main className={style.main}>
			<div className={style.title}>
				Господство могущество <span>{text1}</span> Власть Благо.{' '}
				<span>{text2}</span> Вы ведь хотите это?
			</div>
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
