
/**
 * playerDataInterface - an interface for creating a single player
 */
export interface playerDataInterface {
	name: string
	money: number
	position: number
}

/**
 * initialPlayer - object of the initial player
 */
export const initialPlayer: playerDataInterface = {
	name: 'name',
	money: 1500,
	position: 0
}