import { FC, memo, ReactNode } from 'react'
import style from './styles/InfoText.module.scss'

interface InfoTextI {
	children?: ReactNode
}

const InfoText: FC<InfoTextI> = props => {
	return <p className={style.infoText}>{props.children}</p>
}

InfoText.displayName = 'InfoText'
export default memo(InfoText)
