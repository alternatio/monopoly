import { FC, memo, ReactNode } from 'react'
import styles from './Wrapper.module.scss'

interface WrapperProps {
	maxWidth: string
	marginTop?: string
	gap?: string
	children?: ReactNode
}

const Wrapper: FC<WrapperProps> = props => {
	return (
		<div className={styles.wrapper}>
			<div
				style={{
					width: `min(100%, ${props.maxWidth})`,
					marginTop: props.marginTop ? props.marginTop : '0',
					gap: props.gap ? props.gap : '0',
				}}
				className={styles.innerWrapper}>
				{props.children}
			</div>
		</div>
	)
}

Wrapper.displayName = 'Wrapper'
export default memo(Wrapper)
