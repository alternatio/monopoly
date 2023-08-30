import { usersGameColors } from '@/store/data/userColors'

export interface userDataI {
	uid: string | null
	name: string | null
	email: string | null
	avatar: string | null
}

export interface userGameColorI {
	title: string
	hex: string
}

export interface userGameDataI {
	name: string | null
	color: userGameColorI
	money: number
	position: number
	madeAMove: boolean
}

export interface userI {
	data?: userDataI
	gameData?: userGameDataI
}

export const getInitialUserGameData = (user: userDataI, usersLength: number): userGameDataI => {
	return {
		name: user.name,
		color: usersGameColors[usersLength],
		money: 17500,
		position: 0,
		madeAMove: false
	}
}
