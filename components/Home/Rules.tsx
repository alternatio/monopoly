import { FC, memo } from 'react'
import style from './Rules.module.scss'
import Block from '@/ui/Block/Block'
import Image from 'next/image'
import { rulesPaintImage, rulesTownImage } from '@/lib/importImage'
import BlockHeader from '@/ui/Block/BlockHeader'
import BlockContent from '@/ui/Block/BlockContent'
import BlockText from '@/ui/Block/BlockText'
import BlockAccent from '@/ui/Block/BlockAccent'
import BlockTitle from '@/ui/Block/BlockTitle'
import QuestionWrapper from './QuestionWrapper'

interface RulesProps {
	isVisible: boolean
	index: number
}

const Rules: FC<RulesProps> = props => {
	return (
		<QuestionWrapper isVisible={props.isVisible} index={props.index}>
			<div className={style.rules}>
				<div className={style.topPart}>
					<Block width={'min(95%, 30rem)'}>
						<BlockHeader leftPart={'Как начать?'} rightPart={'解释'} />
						<BlockContent>
							<BlockText>
								Чтобы попасть в игровую среду подготовленным, лучше всего
								прочитать{' '}
								<BlockAccent type={'accent'}>
									правила, находящиеся чуть ниже.
								</BlockAccent>
							</BlockText>
							<BlockText>
								В начале игры генерируется ссылка 🔗, которой вы можете поделится с
								друзьями 🍤, чтобы они присоединились к игре. По желанию, можно
								установить пароль на сессию.{' '}
								<BlockAccent type={'accent'}>
									Начать игру можно в меню сверху, так называемое 'veggie
									burger' 🗿
								</BlockAccent>
							</BlockText>
							<BlockText>
								В ходе разработки игры я хотел создать понятный и приятный на
								вид интерфейс, думаю вы найдёте куда нажать, чтобы получить то,
								что вам нужно 🙂.
							</BlockText>
						</BlockContent>
					</Block>
					<span className={style.symbols}>规则</span>
				</div>
				<Block className={style.rightBlock} width={'min(95%, 30rem)'}>
					<BlockHeader leftPart={'Правила'} rightPart={'规则'} />
					<BlockTitle>Начало</BlockTitle>
					<BlockText>
						В начале партии даётся 50 миллионов юаней 💴, этого вам хватит на
						покупку какого-то количества компаний. За каждый переход через старт
						даётся 5 миллионов юаней,{' '}
						<BlockAccent type={'accent'}>
							но после 30 минут игры этот бонус перестаёт даваться 😐.
						</BlockAccent>
					</BlockText>
					<BlockTitle>Поле игры</BlockTitle>
					<BlockText>
						Поле игры состоит из клеток, они делятся на несколько типов:
						Компания, Шанс, Угловые.{' '}
						<BlockAccent type={'accent'}>Клетки компаний</BlockAccent> можно
						купить, а в случае отказа от покупки - такая компания попадает на
						аукцион 💹, при желании её может купить любой желающий, но продаётся по
						завышенной цене (20%). На клетке{' '}
						<BlockAccent type={'accent'}>шанс</BlockAccent> можно получить
						случайную ситуацию (грабёж 🏴‍☠️, деньги на дороге, налоги и т.д.).{' '}
					</BlockText>
					<BlockText>
						<BlockAccent type={'accent'}>Угловые клетки:</BlockAccent> старт,
						тюрьма 🚨, кости 🎲, дядя полицейский 👮‍♂️. В тюрьму попадают после дяди
						полицейского и находятся{' '}
						<BlockAccent type={'accent'}>там 2 цикла ходов.</BlockAccent> На
						клетке <BlockAccent type={'accent'}>кости</BlockAccent> можно
						сыграть в мини-игру, в которой есть возможность получить
						дополнительные деньги 💴.
					</BlockText>
					<BlockTitle>Компания</BlockTitle>
					<BlockText>
						Компанию можно улучшать, всего есть 3 уровня улучшений ⭐. В карточке
						компании будет предоставлена вся возможная информация и ней 💁‍♂️, просто
						нажмите на клетку.
					</BlockText>
					<BlockTitle>Конец игры</BlockTitle>
					<BlockText>
						Игра заканчивается, когда остаётся лишь один игрок. Он считается победителем 🥇.
					</BlockText>
				</Block>
				<div className={style.back}>
					<Image
						className={style.rulesPaint}
						src={rulesPaintImage}
						alt={'rulesPaintImage'}
					/>
					<Image
						className={style.townPaint}
						src={rulesTownImage}
						alt={'rulesTownImage'}
					/>
				</div>
			</div>
		</QuestionWrapper>
	)
}

Rules.displayName = 'Rules'
export default memo(Rules)
