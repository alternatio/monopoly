import { createSlice } from '@reduxjs/toolkit'
import { userDataI } from '@/store/interfaces/user'

interface userI {
	data?: userDataI
}

const initialState: userI = {}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserData(state, action) {
			state.data = { ...action.payload }
		},
	},
})

export const { setUserData } = userSlice.actions
export default userSlice.reducer
