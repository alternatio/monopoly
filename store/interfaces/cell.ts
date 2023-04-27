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

export interface cellCoordinates {
	xStart: number
	xEnd: number
	yStart: number
	yEnd: number
}

export interface cellI {
	type: cellTypes
}

export interface companyBaseI extends cellI {
	name: string
	image: string
	description: string
	cost: number
	owner?: userDataI
}

export interface commonCompanyI extends companyBaseI, cellI {
	type: 'common'
	baseRentCost: number
	upgradeCost: number
	percentageOfRentIncrease: number
	numberOfImprovements?: number
}

export interface uncommonCompanyI extends companyBaseI, cellI {
	type: 'uncommon'
	quantityModifier: number
}

export interface chanceI extends cellI {
	type: 'chance'
}

export interface taxI extends cellI {
	type: 'tax'
}

export interface startI extends cellI {
	type: 'start'
}

export interface prisonI extends cellI {
	type: 'prison'
}

export interface policemanI extends cellI {
	type: 'policeman'
}

export interface diceI extends cellI {
	type: 'dice'
}

export type companyT = commonCompanyI | uncommonCompanyI
export type cornersT = startI | prisonI | policemanI | diceI
export type cellT = companyT | chanceI | taxI | cornersT
