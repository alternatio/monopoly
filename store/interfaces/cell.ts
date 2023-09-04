import { userDataI } from '@/store/interfaces/user'

type cellTypes = 'common' | 'uncommon' | 'chance' | 'tax' | 'corner' | 'chat'

export interface cellWithOnlyType {
	type: cellTypes
}

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

// company cells
export interface companyBaseI extends baseCellI {
  id: number
	name: string
	image: string
	description: string
	cost: number
	group?: companyGroupI
	owner?: Partial<userDataI>
}
export interface commonCompanyI extends companyBaseI, baseCellI {
	type: 'common'
	branchCost?: number
	rents?: number[]
}
export interface uncommonCompanyI extends companyBaseI, baseCellI {
	type: 'uncommon'
	baseRent?: number
	// multiplier?: number
}

// other cells
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
export interface chatI extends cellWithOnlyType {
	type: 'chat'
}

export type companyT = commonCompanyI | uncommonCompanyI
export type innerCellsT = chanceI | taxI
export type positionT = [number, number, number, number]

export interface cellI {
	data: companyT | innerCellsT | cornerI | chatI
	position: positionT
	// ? with possible moves ?
	index?: number
}
