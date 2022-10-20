import {cellDataInterface} from "./cellData";

export interface playerDataInterface {
	name: string
	money: number
	purchasedCells: cellDataInterface[]
}