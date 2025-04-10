import { combineReducers } from "@reduxjs/toolkit";
import productReduer from '../Redux/productSlice'
import cartReducer from './cartSlice'
import wishlistReducer from './wishlistSlice'
import authReducer from './authSlice'


export const reducer = combineReducers({
    products : productReduer,
    cartItem : cartReducer,
    wishlist : wishlistReducer,
    authSlice : authReducer
})