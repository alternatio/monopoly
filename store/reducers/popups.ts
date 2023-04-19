import {createSlice} from "@reduxjs/toolkit";

interface popupsI {
  currentPopup: number
}

const initialState: popupsI = {
  currentPopup: -1
}

const popupsSlice = createSlice({
  name: 'popups',
  initialState,
  reducers: {
    setCurrentPopup(state, action) {
      state.currentPopup = action.payload
    }
  }
})

export const { setCurrentPopup } = popupsSlice.actions
export default popupsSlice.reducer