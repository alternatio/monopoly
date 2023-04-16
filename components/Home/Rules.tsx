import { FC, memo } from 'react'
import style from './Rules.module.scss'
import Block from '@/ui/Block/Block'
import Image from 'next/image'
import { rulesPaintImage, rulesTownImage } from '@/lib/importImage'
import BlockHeader from '@/ui/Block/BlockHeader'

interface RulesProps {}

const Rules: FC<RulesProps> = () => {
	return (
		<div className={style.rules}>
			<div className={style.topPart}>
				<Block width={'min(100%, 30rem)'}>
					<BlockHeader leftPart={'Краткие пояснения'} rightPart={'解释'}/>
				</Block>
				<span className={style.symbols}>
					规则
				</span>
			</div>
			<Block width={'min(100%, 30rem)'}>123</Block>
			<div className={style.back}>
				<Image className={style.rulesPaint} src={rulesPaintImage} alt={'rulesPaintImage'} />
				<Image className={style.townPaint} src={rulesTownImage} alt={'rulesTownImage'} />
			</div>
		</div>
	)
}

Rules.displayName = 'Rules'
export default memo(Rules)
