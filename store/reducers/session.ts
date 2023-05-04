import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { cellI } from '@/store/interfaces/cell'
import { userGameDataI } from '@/store/interfaces/user'

export interface sessionReducerI {
	gridSize: [number, number]
	cells: cellI[]
	users: userGameDataI[]
	maxPlayers: number
}

const initialState: sessionReducerI = {
	gridSize: [13, 13],
	cells: [],
	users: [],
	maxPlayers: 3,
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
		setGameUsers(
			state: sessionReducerI,
			action: PayloadAction<sessionReducerI['users']>
		) {
			state.users = action.payload
		},
		setMaxPlayers(
			state: sessionReducerI,
			action: PayloadAction<sessionReducerI['maxPlayers']>
		) {
			state.maxPlayers = action.payload
		},
	},
})

export const { setGridSize, setCells, setGameUsers, setMaxPlayers } =
	sessionSlice.actions
export default sessionSlice.reducer
