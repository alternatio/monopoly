'use client'

import {CSSProperties, FC, memo} from 'react'
import style from '../Popups.module.scss'
import {useAppSelector} from "@/store/index";

const movePopupStyles: CSSProperties = {
  width: '100%',
  zIndex: 9,
}

const MovePopup: FC = () => {
  const playerTurnNumber = useAppSelector(state => state.session.sessionDataStore?.playerTurn)
  const currentPlayerData = useAppSelector(state => state.user.data)
  const currentPlayer = useAppSelector(state => state.session.sessionDataStore?.players)

  return (
    <div className={style.popup} style={movePopupStyles}>
      123
    </div>
  )
}

export default memo(MovePopup)
