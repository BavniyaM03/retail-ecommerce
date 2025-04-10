import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './combineReducers'

export const store = configureStore({
    reducer : reducer
})