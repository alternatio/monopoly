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

export const usersGameColors: Readonly<userGameColorsI> = {
	red: {
		title: 'red',
		hex: '#ee2838',
	},
	yellow: {
		title: 'yellow',
		hex: '#fc2',
	},
	green: {
		title: 'green',
		hex: '#4b6',
	},
	blue: {
		title: 'blue',
		hex: '#55f',
	},
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
