
/**
 * playerDataInterface - an interface for creating a single player
 */
export interface playerDataInterface {
	name?: string
	money: number
	position: number
	targetPosition: number
}

/**
 * initialPlayer - object of the initial player
 */
export const initialPlayer: playerDataInterface = {
	money: 1500,
	position: 0,
	targetPosition: 0
}