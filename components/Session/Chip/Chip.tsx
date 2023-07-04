import { FC, memo } from 'react'
import style from './Chip.module.scss'
import { userI } from '@/store/interfaces/user'
import { motion } from 'framer-motion'

interface ChipI {
	user: userI
}

const Chip: FC<ChipI> = ({ user }) => {
	return (
		<motion.div
			layoutId={user?.data.email ? user.data.email : 'null'}
			className={style.chip}
			style={{ border: `${user.gameData.color.hex} solid .26rem` }}
		/>
	)
}

export default memo(Chip)
