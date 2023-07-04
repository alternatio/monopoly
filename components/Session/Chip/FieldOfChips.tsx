'use client'

import {FC, memo} from "react";
import {useAppSelector} from "@/store/index";
import style from './Chip.module.scss'
import {cellI} from "@/store/interfaces/cell";

interface FieldOfChipsProps {
  position: cellI['position']
}

const FieldOfChips: FC<FieldOfChipsProps> = props => {
  const players = useAppSelector(state => state.session.sessionDataStore?.players)

  // players[0].gameData.position

  return (
    <div className={style.fieldOfChips}>

    </div>
  )
}

export default memo(FieldOfChips)