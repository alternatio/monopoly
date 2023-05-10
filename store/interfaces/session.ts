import { userDataI } from '@/store/interfaces/user'

export interface timeI {
	hour: number
	minute: number
	second: number
}

export interface sessionI {
	id: string
	password?: string
	maxPlayers: number
	players: userDataI[]
	owner: userDataI
	// timeStart: timeI
}
