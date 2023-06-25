'use client'

import { FC, memo, useEffect } from 'react'
import style from './Users.module.scss'
import UserBlock from '@/components/Session/Users/UserBlock'
import { useAppDispatch, useAppSelector } from '@/store/index'
import { setUserGameData } from '@/store/reducers/user'
import { userGameDataI } from '@/store/interfaces/user'
import { usersGameColors } from '@/store/data/userColors'

const UsersMenu: FC = () => {
	const user = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (!user.data?.name) return
		const initialUserGameData: userGameDataI = {
			name: user.data.name,
			color: usersGameColors.red,
			money: 50000,
			hisTurn: true,
			position: [0, 0]
		}

		dispatch(setUserGameData(initialUserGameData))
	}, [user.data])

	return (
		<div className={style.users}>
			<UserBlock userData={user.data} userGameData={user.gameData} />
		</div>
	)
}

export default memo(UsersMenu)
