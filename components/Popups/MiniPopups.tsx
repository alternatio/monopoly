import {FC, ReactNode} from "react";
import style from './Popup.module.scss'

interface MiniPopupsProps {
  children: ReactNode
}

const MiniPopups: FC<MiniPopupsProps> = props => {
  return (
    <div className={style.miniPopups}>
      {props.children}
    </div>
  )
}

export default MiniPopups