import { FC, memo } from 'react'
import style from './styles/Logo.module.scss'
import Image from 'next/image'
import { tableIcon } from '../../helpers/importIcons'

interface LogoProps {
	withoutName?: boolean
}

const Logo: FC<LogoProps> = props => {
	return (
		<div className={style.logo}>
			<Image className={style.logoImage} src={tableIcon} alt={'logo'} />
			{!props.withoutName && (
				<span className={style.logoText}>Monopoly</span>
			)}
		</div>
	)
}

Logo.displayName = 'Logo'
export default memo(Logo)
