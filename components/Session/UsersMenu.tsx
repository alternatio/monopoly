'use client'

import { FC, memo, useEffect } from 'react'
import style from './Users.module.scss'
import UserBlock from '@/components/Session/UserBlock'
import { useAppDispatch, useAppSelector } from '@/store/index'
import { setUserGameData } from '@/store/reducers/user'
import { userGameDataI, usersGameColors } from '@/store/interfaces/user'

const UsersMenu: FC = () => {
	const userData = useAppSelector(state => state.user.data)
	const userGameData = useAppSelector(state => state.user.gameData)
	const dispatch = useAppDispatch()

	useEffect(() => {
		const initialData: userGameDataI = {
			isHost: false,
			color: usersGameColors.red,
			money: 50000,
			inPrison: false,
			hisTurn: true,
			playingDice: false
		}

		dispatch(setUserGameData(initialData))
	}, [])

	return (
		<div className={style.users}>
			<UserBlock userData={userData} userGameData={userGameData} />
			<UserBlock userData={userData} userGameData={userGameData} />
			<UserBlock userData={userData} userGameData={userGameData} />
			<UserBlock userData={userData} userGameData={userGameData} />
		</div>
	)
}

export default memo(UsersMenu)
