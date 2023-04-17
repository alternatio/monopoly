import { FC, memo } from 'react'
import style from './Footer.module.scss'
import Logo from '@/ui/Logo/Logo'

const Footer: FC = () => {
	return (
		<div className={style.footer}>
			<LeftPart />
			<RightPart />
		</div>
	)
}

const LeftPart: FC = () => {
	return (
		<div className={style.leftPart}>
			<span>
				2023
			</span>
			<span>
				modiris | alternatio
			</span>
		</div>
	)
}

const RightPart: FC = () => {
	return (
		<div className={style.rightPart}>
			<Logo className={style.logo} />
		</div>
	)
}

export default memo(Footer)