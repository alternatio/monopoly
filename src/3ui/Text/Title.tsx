import { FC, memo } from 'react'
import style from './styles/Text.module.scss'

interface TextProps {

}

const Title: FC<TextProps> = props => {
	return (
		<div></div>
	)
}

Title.displayName = 'Text'
export default memo(Title)