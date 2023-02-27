import { FC, memo } from 'react'
import style from './styles/Wrapper.module.scss'

interface WrapperProps {

}

const Wrapper: FC<WrapperProps> = props => {
  return (
    <div></div>
  )
}

Wrapper.displayName = 'Wrapper'
export default memo(Wrapper)