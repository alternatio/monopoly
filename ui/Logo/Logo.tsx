import { FC, memo } from 'react'
import style from './Logo.module.scss'

interface LogoProps {
	withoutName?: boolean
	fontSize?: number

}

const Logo: FC<LogoProps> = props => {
	return (
		<div className={style.logo}>
			<div className={style.logoImage}>
				垄断
			</div>
			{!props.withoutName && (
				<>
					<div className={style.divider}/>
					<span className={style.logoText}>
						<span className={style.textFirst}>Mono</span>
						<span className={style.textSecond}>poly</span>
					</span>
				</>
			)}
		</div>
	)
}

Logo.displayName = 'Logo'
export default memo(Logo)
