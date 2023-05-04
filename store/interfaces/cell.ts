import { userDataI } from '@/store/interfaces/user'

type cellTypes =
	| 'common'
	| 'uncommon'
	| 'chance'
	| 'tax'
	| 'corner'

export interface baseCellI {
	type: cellTypes
	direction?: 'left' | 'top' | 'right' | 'bottom'
}

export interface companyGroupI {
	id?: number
	colorHex?: string
	companyGroupNameEng?: string
	companyGroupNameRus?: string
}

export interface companyBaseI extends baseCellI {
	name: string
	image: string
	description: string
	cost: number
	group?: companyGroupI
	owner?: Partial<userDataI>
}

export interface commonCompanyI extends companyBaseI, baseCellI {
	type: 'common'
	baseRentCost: number
	upgradeBaseCost: number
	multiplierForImprovements: number
	numberOfImprovements?: number
}

export interface uncommonCompanyI extends companyBaseI, baseCellI {
	type: 'uncommon'
	quantityModifier: number
}

export interface chanceI extends baseCellI {
	type: 'chance'
	image: string
}

export interface taxI extends baseCellI {
	type: 'tax'
	image: string
}

export interface cornerI extends baseCellI {
	type: 'corner'
	text: string
	image: string
}

export type companyT = commonCompanyI | uncommonCompanyI
export type innerCellsT = chanceI | taxI
export type positionT = [number, number, number, number]

export interface cellI  {
	data: companyT | innerCellsT | cornerI
	position: positionT
}