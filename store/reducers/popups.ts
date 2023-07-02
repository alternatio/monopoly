import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createUID } from '@/lib/commonFunctions'
import { MiniPopupProps } from '@/components/Popups/MiniPopup'

interface popupsI {
	currentPopup: number
	miniPopupTexts: MiniPopupTextI[]
}

export interface MiniPopupTextI {
	id: string
	body: string
	type: MiniPopupProps['type']
	time?: number
}

export type PayloadMiniPopupTextI = Pick<
	MiniPopupTextI,
	'body' | 'type' | 'time'
>

const initialState: popupsI = {
	currentPopup: -1,
	miniPopupTexts: [],
}

const popupsSlice = createSlice({
	name: 'popups',
	initialState,
	reducers: {
		setCurrentPopup(state, action: PayloadAction<popupsI['currentPopup']>) {
			state.currentPopup = action.payload
		},
		pushMiniPopupTexts(state, action: PayloadAction<PayloadMiniPopupTextI>) {
			state.miniPopupTexts.push({
				id: createUID(),
				body: action.payload.body,
				type: action.payload.type,
				time: action.payload.time,
			})
		},
		filterPopupTexts(state, action: PayloadAction<string>) {
			state.miniPopupTexts = state.miniPopupTexts.filter(
				text => text.id !== action.payload
			)
		},
	},
})

export const { setCurrentPopup, pushMiniPopupTexts, filterPopupTexts } =
	popupsSlice.actions
export default popupsSlice.reducer
