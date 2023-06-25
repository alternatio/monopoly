import { userDataI } from '@/store/interfaces/user'

export interface sessionI {
	id: string
	password: string
	maxPlayers: number
	players: userDataI[]
	owner: userDataI
	timeStart: number
}
