import { createSlice } from "@reduxjs/toolkit";

const initialState =
    [
        {
            "id": 43,
            "name": "Smartwatch Series 9",
            "brand": "Apple",
            "category": "Accessories",
            "price": 499.99,
            "currency": "USD",
            "stock": 120,
            "rating": 4.8,
            "reviews": 600,
            "discount": 10,
            "color": ["Silver", "Gold", "Black"],
            "sizes": ["41mm", "45mm"],
            "material": "Aluminum",
            "fit": "Adjustable Strap",
            "gender": "Unisex",
            "season": ["All Seasons"],
            "features": ["Heart Rate Monitor", "GPS", "Water Resistant"],
            "warranty": "2 Years",
            "images": [
                "https://example.com/images/applewatch9-1.jpg",
                "https://example.com/images/applewatch9-2.jpg"
            ]
        },
        {
            "id": 44,
            "name": "Wool Blend Overcoat",
            "brand": "Hugo Boss",
            "category": "Clothing",
            "price": 599.99,
            "currency": "USD",
            "stock": 30,
            "rating": 4.9,
            "reviews": 180,
            "discount": 10,
            "color": ["Charcoal Gray", "Navy Blue"],
            "sizes": ["M", "L", "XL"],
            "material": "80% Wool, 20% Polyester",
            "fit": "Tailored Fit",
            "gender": "Men",
            "season": ["Winter"],
            "features": ["Single-Breasted", "Two Side Pockets", "Warm Lining"],
            "warranty": "1 Year",
            "images": [
                "https://example.com/images/woolcoat1.jpg",
                "https://example.com/images/woolcoat2.jpg"
            ]
        }
    ]


const cartSlice = createSlice({
    name: "cartItem",
    initialState: {
        items: initialState
    }, reducers: {
       
        removeCartItem: (state, action) => {
            console.log("payload data", action.payload)
            const product = action.payload;
            state.items = state.items.filter((item) => item.id !== product.id)
        },
        moveToWishlist : (state, action) =>{
            const product = action.payload;
            
        },

        addToWishlist : (state, action)=>{
            const product = action.payload;
            const existingProduct = state.wishlist.find((item)=>item.id === product.id);
            if(existingProduct){
    
            }
            else{
                state.wishlist.push(product);
            }
        },
    }
})

export const { removeCartItem} = cartSlice.actions

export default cartSlice.reducer