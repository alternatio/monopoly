import { userDataI } from '@/store/interfaces/user'

type cellTypes =
	| 'common'
	| 'uncommon'
	| 'chance'
	| 'tax'
	| 'start'
	| 'prison'
	| 'policeman'
	| 'dice'

export interface cellPositionI {
	xStart: number
	xEnd: number
	yStart: number
	yEnd: number
}

export interface baseCellI {
	type: cellTypes
}

export interface companyBaseI extends baseCellI {
	name: string
	image: string
	description: string
	cost: number
	owner?: userDataI
}

export interface commonCompanyI extends companyBaseI, baseCellI {
	type: 'common'
	baseRentCost: number
	upgradeCost: number
	percentageOfRentIncrease: number
	numberOfImprovements?: number
}

export interface uncommonCompanyI extends companyBaseI, baseCellI {
	type: 'uncommon'
	quantityModifier: number
}

export interface chanceI extends baseCellI {
	type: 'chance'
}

export interface taxI extends baseCellI {
	type: 'tax'
}

export interface startI extends baseCellI {
	type: 'start'
}

export interface prisonI extends baseCellI {
	type: 'prison'
}

export interface policemanI extends baseCellI {
	type: 'policeman'
}

export interface diceI extends baseCellI {
	type: 'dice'
}

export type companyT = commonCompanyI | uncommonCompanyI
export type cornersT = startI | prisonI | policemanI | diceI
export type innerCellsT = chanceI | taxI
export type positionT = [number, number, number, number]

export interface cellI  {
	data: companyT | innerCellsT | cornersT
	position: positionT
}
