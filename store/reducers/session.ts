import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {cellI} from "@/store/interfaces/cell";

export interface sessionReducerI {
	gridSize: [number, number],
	cells: cellI[]
}

const initialState: sessionReducerI = {
	gridSize: [13, 13],
	cells: [],
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
	},
})

export const { setGridSize, setCells } = sessionSlice.actions
export default sessionSlice.reducer
