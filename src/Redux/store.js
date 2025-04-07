import { configureStore } from '@reduxjs/toolkit'
// import productReducer from '../Redux/productSlice'
import { reducer } from './combineReducers'

export const store = configureStore({
    reducer : reducer
})