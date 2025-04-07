import { combineReducers } from "@reduxjs/toolkit";
import productReduer from '../Redux/productSlice'
import cartReducer from './cartSlice'
import wishlistReducer from './wishlistSlice'


export const reducer = combineReducers({
    products : productReduer,
    cartItem : cartReducer,
    wishlist : wishlistReducer
})