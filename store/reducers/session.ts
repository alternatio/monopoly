import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { cellI } from '@/store/interfaces/cell'
import { sessionI } from '@/store/interfaces/session'
import { messageI } from '@/store/interfaces/message'

export interface sessionReducerI {
	gridSize: [number, number]
	cells: cellI[]
	maxMoves: number
	sessionDataStore?: Partial<sessionI>
}

const initialState: sessionReducerI = {
	gridSize: [13, 13],
	cells: [],
	maxMoves: 0,
	sessionDataStore: undefined,
}

const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		setGridSize(
			state: sessionReducerI,
			action: PayloadAction<sessionReducerI['gridSize']>
		) {
			state.gridSize = action.payload
		},
		setCells(
			state: sessionReducerI,
			action: PayloadAction<sessionReducerI['cells']>
		) {
			state.cells = action.payload
		},
		setSessionDataStore(
			state: sessionReducerI,
			action: PayloadAction<sessionReducerI['sessionDataStore']>
		) {
			state.sessionDataStore = action.payload
		},
		setMaxMoves(
			state: sessionReducerI,
			action: PayloadAction<sessionReducerI['maxMoves']>
		) {
			state.maxMoves = action.payload
		},
	},
})

export const { setGridSize, setCells, setSessionDataStore, setMaxMoves } =
	sessionSlice.actions
export default sessionSlice.reducer
