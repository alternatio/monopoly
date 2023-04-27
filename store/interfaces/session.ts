import { userDataI } from '@/store/interfaces/user'

export interface sessionI {
	id: string
	password?: string
	players: userDataI[]
	time: number
}
