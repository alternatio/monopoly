import {playerDataInterface, initialPlayer} from "./playerData";

/**
 * SessionDataInterface - interface for create sessions
 */
export interface sessionDataInterface {
	isEnd: boolean
	players: playerDataInterface[]
}

/**
 * initialSession - object of the initial session
 */
export const initialSession: sessionDataInterface = {
	isEnd: false,
	players: [initialPlayer, initialPlayer, initialPlayer, initialPlayer, initialPlayer]
}