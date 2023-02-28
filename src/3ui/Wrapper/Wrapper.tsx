import { FC, memo, ReactNode } from 'react'
import style from './styles/Wrapper.module.scss'

interface WrapperProps {
	maxWidth: string
	children?: ReactNode
}

const Wrapper: FC<WrapperProps> = props => {
	return (
		<div className={style.wrapper}>
			<div
				style={{ width: `min(100%, ${props.maxWidth})` }}
				className={style.innerWrapper}>
				{props.children}
			</div>
		</div>
	)
}

Wrapper.displayName = 'Wrapper'
export default memo(Wrapper)
