import { motion } from 'framer-motion'
import { FC, memo, useState } from 'react'
import style from './styles/Questions.module.scss'
import { buttonVariants } from './styles/buttonVariants'
import AboutCreator from '../../2components/AboutCreator/AboutCreator'
import Rules from '../../2components/Rules/Rules'

const Questions: FC = () => {
	const [buttonActive, setButtonActive] = useState<number>(0)

	const buttons = [
		'Правила',
		'О создателе',
	]

	return (
		<div className={style.questions}>
			<div className={style.buttons}>
				{buttons.map((value, index) => {
					return (
						<motion.button
							variants={buttonVariants}
							onClick={() => setButtonActive(index)}
							animate={buttonActive === index ? 'on' : 'off'}
							whileHover={buttonActive !== index ? 'hover' : 'on'}
							className={style.button}>
							{value}
						</motion.button>
					)
				})}
			</div>
			<main className={style.main}>
				{buttonActive === 0 && (
					<Rules />
				)}
				{buttonActive === 1 && (
					<AboutCreator />
				)}
			</main>
		</div>
	)
}

export default memo(Questions)