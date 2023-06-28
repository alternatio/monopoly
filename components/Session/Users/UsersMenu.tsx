import { FC, memo } from 'react'
import style from './Users.module.scss'
import UserBlock from '@/components/Session/Users/UserBlock'
import EmptyCellForUser from '@/components/Session/Users/EmptyCellForUser'
import { sessionI } from '@/store/interfaces/session'

interface UserMenuProps {
	sessionData: Partial<sessionI>
}

const UsersMenu: FC<UserMenuProps> = props => {
	return (
		<div className={style.users}>
			{props.sessionData.players
				? props.sessionData?.players.map((user, index) => {
						return (
							<UserBlock
								key={user.data.uid}
								userData={user.data}
								userGameData={user.gameData}
							/>
						)
				  })
				: null}
			{props.sessionData.maxPlayers &&
			props.sessionData.players &&
			props.sessionData.maxPlayers > props.sessionData.players.length ? (
				<EmptyCellForUser sessionData={props.sessionData} />
			) : null}
		</div>
	)
}

export default memo(UsersMenu)
