import { FC, memo } from 'react'
import style from './styles/Header.module.scss'

interface HeaderProps {

}

const Header: FC<HeaderProps> = props => {
  return (
    <header className={style.header}>

		</header>
  )
}

Header.displayName = 'Header'
export default memo(Header)