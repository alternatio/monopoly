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
	isHost: boolean
	color: userGameColorI
	money: number
	inPrison: boolean
	hisTurn: boolean
	playingDice: boolean

	ownership: []
}

export interface userGameLocalDataI {
	time: number
}
