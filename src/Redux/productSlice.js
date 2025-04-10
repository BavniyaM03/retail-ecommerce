// All Data
import { createSlice } from "@reduxjs/toolkit";
import bags from "../Data/bags-data.json"
import beauty from "../Data/beauty-data.json"
import { books } from "../Data/books-data"
import electronic from "../Data/electronic-data.json"
import fashion from "../Data/fashion-data.json"
import furniture from "../Data/furniture-data.json"
import home from "../Data/Home-appliances.json"
import laptop from "../Data/laptop-data.json"
import mobile from "../Data/mobile-data.json"
import sports from "../Data/sports-data.json"
import toys from "../Data/toys-data.json"


// MAIN PAGE CATEGORIES IMAGES
import mobileImage from '../assets/category-images/mobile.png'
import laptopImage from '../assets/category-images/laptop.png'
import fashionImage from '../assets/category-images/fashion.webp'
import homeImage from '../assets/category-images/home-appliances.png'
import electronicImage from '../assets/category-images/electronic.webp'
import beautyImage from '../assets/category-images/beauty.webp'
import furnitureImage from '../assets/category-images/furniture.webp'
import sportsImage from '../assets/category-images/sports.png'
import toysImage from '../assets/category-images/toys.jpeg'



export const category = [
    {
        title: "Mobiles",
        image: mobileImage

    },
    {
        title: "Laptops",
        image: laptopImage
    },
    {
        title: "Fashion",
        image: fashionImage
    },
    {
        title: "Home Appliances",
        image: homeImage
    },
    {
        title: "Electronics",
        image: electronicImage
    },
    {
        title: "Toys",
        image: toysImage
    },
    {
        title: "Beauty & Personal Care",
        image: beautyImage
    },
    {
        title: "Furniture",
        image: furnitureImage
    },
    {
        title: "Sports & Fitness",
        image: sportsImage
    }
];


let selectedImages;

const productDetails = [];

const productSlice = createSlice({
    name: "product",
    initialState: {
        categories: category,
        bags: bags,
        beauty: beauty,
        books: books,
        electronic: electronic,
        fashion: fashion,
        furniture: furniture,
        home: home,
        laptop: laptop,
        mobile: mobile,
        sports: sports,
        toys: toys,
        selectedImages : selectedImages,
        productDetails: productDetails
    },
    reducers: {
        displaySelectedImages: (state, action) => {
            const product = action.payload;
            console.log('92', product);
            state.selectedImages = product;
        },
        showProductDetails: (state, action) => {
            const product = action.payload;
            console.log(product);
            state.productDetails = product;
        }
    }
})

export const { displaySelectedImages, showProductDetails } = productSlice.actions;

export default productSlice.reducer;