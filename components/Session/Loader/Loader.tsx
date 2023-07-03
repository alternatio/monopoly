import { FC, memo } from 'react'
import style from './Loader.module.scss'

const Loader: FC = () =>{
  return <div className={style.loader}></div>
}

export default memo(Loader);