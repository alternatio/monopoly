import { FC, memo } from 'react'
import style from './styles/Rules.module.scss'
import InfoBlock from '../../3ui/InfoBlock/InfoBlock'
import InfoText from '../../3ui/InfoText/InfoText'
import InfoLink from '../../3ui/InfoLink/InfoLink'
import Image from 'next/image'
import {
	bottomCircleImage,
	bottomImage,
} from '../../helpers/importIcons'

const Rules: FC = () => {
	return (
		<div className={style.rules}>
			<div className={style.nameOfSection}>Rules</div>

			<div className={style.background}>
				<div className={style.bottomCircleImageWrapper}>
					<Image
						className={style.bottomCircleImage}
						src={bottomCircleImage}
						alt={'bottomCircleImage'}
						width={1024}
						height={1024}
					/>
				</div>
				<div className={style.bottomImageWrapper}>
					<Image
						className={style.bottomImage}
						src={bottomImage}
						alt={'bottomImage'}
						width={1024}
						height={1024}
					/>
				</div>
			</div>

			<div className={style.content}>
				<div className={style.row}>
					<InfoBlock
						title={'Краткие'}
						serifTitle={'пояснения'}
						postTitle={'解释'}>
						<InfoText>
							Чтобы попасть в игровую среду подготовленным,
							лучше всего прочитать{' '}
							<InfoLink href={''}>
								короткое руководство.
							</InfoLink>
						</InfoText>
						<InfoText>
							В начале игры генерируется ссылка, которой вы
							можете поделится с друзьями, чтобы они
							присоединились к игре. По желанию, можно
							установить пароль на сессию.
						</InfoText>
					</InfoBlock>
					<div className={style.chineseText}>规则</div>
				</div>
				<InfoBlock
					className={style.infoBlockRight}
					title={'Правила'}
					postTitle={'规则'}>
					<InfoText>
						В начале партии даётся 50 миллионов юаней, на
						них вы сможете купить какое-то количество
						компаний
					</InfoText>
					<InfoText>
						За каждый переход через старт даётся 5 миллионов
						юаней
					</InfoText>
					<InfoText>
						Многие думают, что Lorem Ipsum - взятый с
						потолка псевдо-латинский набор слов, но это не
						совсем так. Его корни уходят в один фрагмент
						классической латыни 45 года н.э., то есть более
						двух тысячелетий назад. Ричард МакКлинток,
						профессор латыни из колледжа Hampden-Sydney.
					</InfoText>
					<InfoLink href={''}>смотреть больше →</InfoLink>
				</InfoBlock>
			</div>
		</div>
	)
}

Rules.displayName = 'Rules'
export default memo(Rules)
