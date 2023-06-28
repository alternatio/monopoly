import { FC, memo } from 'react'
import style from './Chip.module.scss'
import { userGameDataI } from '@/store/interfaces/user'

interface ChipI {
	userGameData: userGameDataI
}

const Chip: FC<ChipI> = props => {
	return <div className={style.chip}></div>
}

export default memo(Chip)
