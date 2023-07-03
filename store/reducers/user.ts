import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	userDataI,
	userGameDataI,
	userGameLocalDataI,
} from '@/store/interfaces/user'

interface userI {
	data?: userDataI
	gameData?: userGameDataI
	gameLocalData?: userGameLocalDataI
}

const initialState: userI = {}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserData(state: userI, action: PayloadAction<userDataI | undefined>) {
			if (!action.payload) state.data = undefined
			else state.data = { ...action.payload }
		},
		setUserGameData(state: userI, action: PayloadAction<userGameDataI>) {
			state.gameData = { ...action.payload }
		},
		setUserGameLocalData(
			state: userI,
			action: PayloadAction<userGameLocalDataI>
		) {
			state.gameLocalData = { ...action.payload }
		},
	},
})

export const { setUserData, setUserGameData, setUserGameLocalData } =
	userSlice.actions
export default userSlice.reducer
