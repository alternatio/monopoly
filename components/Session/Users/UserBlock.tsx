'use client'

import { FC, memo, useEffect, useState } from 'react'
import style from './Users.module.scss'
import { userDataI, userGameDataI, userI } from '@/store/interfaces/user'
import { sessionI } from '@/store/interfaces/session'
import { useAppDispatch } from '@/store/index'
import { setUserPopup } from '@/store/reducers/session'
import Avatar from '@/components/Session/Users/Avatar'

interface UserBlockI {
	userData?: userDataI
	userGameData?: userGameDataI
	sessionData?: Partial<sessionI>
	user?: userI
}

const UserBlock: FC<UserBlockI> = props => {
	const dispatch = useAppDispatch()

	const [hisTurn, handleHisTurn] = useState<boolean>(false)

	useEffect(() => {
		const playerIndex = props.sessionData?.players?.findIndex(
			player => player.data?.email === props.userData?.email
		)
		if (
			playerIndex !== undefined &&
			props.sessionData?.playerTurn !== undefined &&
			props.sessionData.players?.length !== undefined
		) {
			playerIndex === props.sessionData.playerTurn
				? handleHisTurn(true)
				: handleHisTurn(false)
		}
	}, [props])

	return (
		<div
			className={style.user}
			onClick={() => {
				if (!props.user) return
				dispatch(setUserPopup(props.user))
			}}
			style={{
				background: hisTurn ? `${props.userGameData?.color.hex}18` : '',
			}}>
			<Avatar userData={props.userData} userGameData={props.userGameData} />
			<div className={style.info}>
				{props.userData?.name && props.userGameData && (
					<div className={style.nameWithColor}>
						<span className={style.name}>{props.userData.name}</span>|
						<span className={style.color}>
							{props.userGameData.color.title}
						</span>
					</div>
				)}
				{props.userGameData && (
					<>
						<span className={style.money}>{props.userGameData.money}M¥</span>
					</>
				)}
			</div>
		</div>
	)
}

export default memo(UserBlock)
