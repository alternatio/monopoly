import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	userDataI,
	userGameDataI,
	userI,
} from '@/store/interfaces/user'


const initialState: userI = {
	data: undefined,
	gameData: undefined,
}

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
		// setUserGameLocalData(
		// 	state: userI,
		// 	action: PayloadAction<userGameLocalDataI>
		// ) {
		// 	state.gameLocalData = { ...action.payload }
		// },
	},
})

export const { setUserData, setUserGameData } =
	userSlice.actions
export default userSlice.reducer
