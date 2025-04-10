import { createSlice, current } from "@reduxjs/toolkit";

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
               "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSXH8LTz3mntLlseoyjxJWbU7XlTD78kxRenKtjDC9CMtuAh1Aqjqsu0hsBXqi2XVTOyWfle5yo-Oc5T-qj9sDkDhiUKNsRQt1fpshT7Qw3dQMiqIKgLdhHddE"
            ],
            "quantity": 1
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
                "https://slimages.macysassets.com/is/image/MCY/products/4/optimized/27443934_fpx.tif?op_sharpen=1&wid=700&fit=fit,1&fmt=webp"
            ],
            "quantity": 1
        }
    ]


const cartSlice = createSlice({
    name: "cartItem",
    initialState: {
        items: initialState
    }, reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.items.find((item) => { if (item.id === product.id) { return item } else { return null } })
            console.log("existing Product", existingProduct);
            if (existingProduct) {
                existingProduct.quantity += 1;
            }
            else {
                state.items.push({ ...product, quantity: 1 });
            }
            console.log(current(state));
        },

        removeToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.items.find((item) => { if (item.id === product.id) { return item } else { return null } })
            console.log(product);
            if (existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
            }
            else {
                removeCartItem();
            }

        },

        removeCartItem: (state, action) => {
            console.log("payload data", action.payload)
            const product = action.payload;
            state.items = state.items.filter((item) => item.id !== product.id)
        },

        moveToWishlist: (state, action) => {
            const product = action.payload;
            state.items = state.items.filter((item) => item.id !== product.id)
        },
    }
})

export const { addToCart, removeCartItem, removeToCart, moveToWishlist } = cartSlice.actions

export default cartSlice.reducer