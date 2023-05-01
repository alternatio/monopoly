import { Dispatch, FC, memo, SetStateAction } from 'react'
import style from './InputNumber.module.scss'
import Image from 'next/image'

interface InputNumberI extends Partial<Pick<HTMLLabelElement, 'className'>> {
	setValue: Dispatch<SetStateAction<number>>
	value: number
	min: number
	max: number
	firstImage: string
	secondImage: string
	text?: string
}

const InputNumber: FC<InputNumberI> = props => {
	return (
		<label className={`${style.label} ${props.className}`}>
			<main className={style.main}>
				<button
					onClick={() => {
						if (props.value > props.min) {
							props.setValue(prev => prev - 1)
						}
					}}
					className={style.button}>
					<Image src={props.firstImage} alt={'decrease'} />
				</button>
				<span className={style.text}>
				{props.value}
			</span>
				<button
					onClick={() => {
						if (props.value < props.max) {
							props.setValue(prev => prev + 1)
						}
					}}
					className={style.button}>
					<Image src={props.secondImage} alt={'decrease'} />
				</button>
			</main>
			<span className={style.propText}>
				{props.text}
			</span>
		</label>
	)
}

export default memo(InputNumber)
