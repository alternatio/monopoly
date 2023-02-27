import { FC, memo } from 'react'
import style from './styles/Text.module.scss'

interface TextProps {

}

const Description: FC<TextProps> = props => {
  return (
    <div></div>
  )
}

Description.displayName = 'Text'
export default memo(Description)