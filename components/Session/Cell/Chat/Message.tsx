import {FC, memo} from "react";
import style from './Chat.module.scss'

const Message: FC = () => {
  return (
    <div className={style.message}>

    </div>
  )
}

export default memo(Message)