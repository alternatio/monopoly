import {userDataI, userI} from '@/store/interfaces/user'

export interface sessionI {
	id: string
	password: string
	maxPlayers: number
	players: userI[]
	owner: userDataI
	timeStart: number
	timeEnd: false | number
	winner: false | userI
}
