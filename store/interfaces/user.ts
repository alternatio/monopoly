import {usersGameColors} from "@/store/data/userColors";

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

export interface userGameColorsI {
	red: Readonly<userGameColorI>
	yellow: Readonly<userGameColorI>
	green: Readonly<userGameColorI>
	blue: Readonly<userGameColorI>
}

export interface userGameDataI {
	name: string | null
	color: userGameColorI
	money: number
	hisTurn: boolean
	position: [number, number]
}

export interface userGameLocalDataI {
	time: number
}

export interface userI {
	data: userDataI
	gameData: userGameDataI
}

export const getInitialUserGameData = (user: userDataI): userGameDataI => {
	return {
		name: user.name,
		color: usersGameColors.red,
		money: 50000,
		hisTurn: true,
		position: [0, 0]
	}
}