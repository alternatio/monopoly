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
	name: string
	color: userGameColorI
	money: number
	hisTurn: boolean
	position: [number, number]
}

export interface userGameLocalDataI {
	time: number
}
