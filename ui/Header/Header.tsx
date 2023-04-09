import { FC, memo } from 'react'
import style from './styles/Header.module.scss'
import Button from '@/ui/Button/Button'
import Logo from '@/ui/Logo/Logo'

interface HeaderProps {
	maxWidth: string
	scrollPosition?: number
}

const Header: FC<HeaderProps> = props => {
	return (
		<div className={style.headerWrapper}>
			<div
				style={{ width: `min(100%, ${props.maxWidth})` }}
				className={style.header}>
				<div className={style.part}>
					<Logo />
					<div className={style.rightPart}>
						<Button className={style.button}>Начать играть</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

Header.displayName = 'Header'
export default memo(Header)
