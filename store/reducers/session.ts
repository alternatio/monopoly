import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { cellI, companyT } from '@/store/interfaces/cell'
import { sessionI } from '@/store/interfaces/session'
import { userI } from '@/store/interfaces/user'

export interface sessionReducerI {
	gridSize: [number, number]
	cells: cellI[]
	maxMoves: number
	sessionDataStore?: Partial<sessionI>
	companyPopup: null | companyT
	userPopup: null | userI
}

const initialState: sessionReducerI = {
	gridSize: [13, 13],
	cells: [],
	maxMoves: 0,
	sessionDataStore: undefined,
	companyPopup: null,
	userPopup: null,
}

const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		setGridSize(state: sessionReducerI, action: PayloadAction<sessionReducerI['gridSize']>) {
			state.gridSize = action.payload
		},
		setCells(state: sessionReducerI, action: PayloadAction<sessionReducerI['cells']>) {
			state.cells = action.payload
		},
		setSessionDataStore(
			state: sessionReducerI,
			action: PayloadAction<sessionReducerI['sessionDataStore']>
		) {
			state.sessionDataStore = action.payload
		},
		setMaxMoves(state: sessionReducerI, action: PayloadAction<sessionReducerI['maxMoves']>) {
			state.maxMoves = action.payload
		},
		setCompanyPopup(
			state: sessionReducerI,
			action: PayloadAction<sessionReducerI['companyPopup']>
		) {
			state.companyPopup = action.payload
		},
		setUserPopup(state: sessionReducerI, action: PayloadAction<sessionReducerI['userPopup']>) {
			state.userPopup = action.payload
		},
	},
})

export const {
	setGridSize,
	setCells,
	setSessionDataStore,
	setMaxMoves,
	setCompanyPopup,
	setUserPopup,
} = sessionSlice.actions
export default sessionSlice.reducer
