import { ChangeEvent, FC, memo } from 'react'
import style from './Input.module.scss'

type onChangeT = (e: ChangeEvent<HTMLInputElement>) => void

interface InputI {
	input?: Partial<Pick<HTMLInputElement, 'placeholder' | 'value' | 'disabled'>>
	autoFocus?: boolean
	onChange?: onChangeT
	maxLength?: number
	className?: string
}

const Input: FC<InputI> = props => {
	return (
		<label
			data-disabled={props.input?.disabled}
			className={style.label}>
			<input
				className={`${style.input} ${props.className}`}
				type={'text'}
				{...props.input}
				maxLength={props.maxLength}
				autoFocus={props.autoFocus}
				onChange={e => props.onChange && props.onChange(e)}
			/>
		</label>
	)
}

export default memo(Input)
