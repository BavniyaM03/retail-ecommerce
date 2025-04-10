import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    "id": 36,
    "name": "Smart Home Security Camera",
    "brand": "Arlo",
    "category": "Home Security",
    "price": 199.99,
    "currency": "USD",
    "stock": 85,
    "rating": 4.8,
    "reviews": 320,
    "discount": 15,
    "color": ["White", "Black"],
    "resolution": "1080p Full HD",
    "connectivity": ["WiFi", "Cloud Storage"],
    "features": ["Night Vision", "Motion Detection", "Two-Way Audio"],
    "warranty": "1 Year",
    "description": "Protect your home with the Arlo Smart Home Security Camera. With 1080p HD resolution, night vision, and motion detection, it provides real-time security alerts and two-way audio communication.",
    "images": [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSkc9DkBcLGEMrnTVkdjbG9ovAR1BbYoFS_prcbsSIEXUXXH1uWEPuLlJJDMSznbXCth-pOTxRmpMuXpPs-SICTEpm-JOrsQF8rPaTp13sqoKJLEFW9nu0g"
    ]
  },
  {
    "id": 37,
    "name": "Fast Wireless Charger",
    "brand": "Anker",
    "category": "Accessories",
    "price": 39.99,
    "currency": "USD",
    "stock": 300,
    "rating": 4.5,
    "reviews": 580,
    "discount": 10,
    "color": ["Black", "White"],
    "charging_speed": "15W",
    "connectivity": ["USB-C"],
    "features": ["Overheat Protection", "Case Friendly", "LED Indicator"],
    "warranty": "1 Year",
    "description": "Charge your devices quickly and safely with the Anker Fast Wireless Charger. Featuring 15W fast charging, case-friendly design, and overheating protection, it's perfect for everyday use.",
    "images": [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQQn6ME_hIlgLOhL736I9xSLBZGXmby47Nlof93C3VjyU2QPh4_tL2gAmsJw0DDXWv3zpgCjSMi_FrrLhg5Bk_Z7SGRZo1fUNSr9QLIak3aFEhTd9K3O3vx1w"
    ]
  }
]

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: initialState,
  },
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;
      const existingProduct = state.wishlist.find((item) => item.id === product.id);
      if (existingProduct) {

      }
      else {
        state.wishlist.push(product)
      }
    },

    removeToWishlist: (state, action) => {
      const product = action.payload;
      state.wishlist = state.wishlist.filter((item) => item.id !== product.id);
    }
  }
})


export const { addToWishlist, removeToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;