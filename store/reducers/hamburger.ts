import { createSlice } from '@reduxjs/toolkit'

interface hamburgerI {
	isOpen: boolean
}

const initialState: hamburgerI = {
	isOpen: false,
}

export const hamburgerSlice = createSlice({
	name: 'hamburger',
	initialState,
	reducers: {
		toggleHamburgerOpen(state: hamburgerI) {
			state.isOpen = !state.isOpen
		},
		setHamburgerOpen(state: hamburgerI, action) {
			state.isOpen = action.payload
		},
	},
})

export const { toggleHamburgerOpen, setHamburgerOpen } = hamburgerSlice.actions
export default hamburgerSlice.reducer
