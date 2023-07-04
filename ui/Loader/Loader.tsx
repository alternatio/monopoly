import { FC, memo } from 'react'
import style from './Loader.module.scss'

const Loader: FC = () =>{
  return <div className={style.loader} />
}

export default memo(Loader);