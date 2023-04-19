import { FC, memo } from 'react'
import style from './CheckBox.module.scss'

interface CheckBoxI {
	input?: Partial<Pick<HTMLInputElement, 'checked'>>
	onChange?: CallableFunction
}

const Checkbox: FC<CheckBoxI> = props => {
	return (
		<label className={style.label}>
			<input
				className={style.input}
				{...props.input}
				onChange={e => props.onChange && props.onChange(e)}
				type='checkbox'
			/>
		</label>
	)
}

export default memo(Checkbox)
