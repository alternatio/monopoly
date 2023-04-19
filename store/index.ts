import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import popups from '@/store/reducers/popups'
import user from "@/store/reducers/user";

const rootReducer = combineReducers({
	popups: popups,
	user: user,
})

// index store
export const store = configureStore({
	reducer: rootReducer,
})

type DispatchFunction = () => AppDispatch

// ts hooks
export const useAppDispatch: DispatchFunction = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// output
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
