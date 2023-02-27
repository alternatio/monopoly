import { FC, memo } from 'react'
import style from './styles/Text.module.scss'

interface TextProps {

}

const Accent: FC<TextProps> = props => {
	return (
		<div></div>
	)
}

Accent.displayName = 'Text'
export default memo(Accent)