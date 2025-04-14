// All Data
import { createSlice, current } from "@reduxjs/toolkit";
import bags from "../Data/bags-data.json"
import beauty from "../Data/beauty-data.json"
import books from "../Data/books-data.json"
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
        id: 'mobile',
        title: "Mobiles",
        image: mobileImage

    },
    {
        id: 'laptop',
        title: "Laptops",
        image: laptopImage
    },
    {
        id: 'fashion',
        title: "Fashion",
        image: fashionImage
    },
    {
        id: 'home',
        title: "Home Appliances",
        image: homeImage
    },
    {
        id: 'electronic',
        title: "Electronics",
        image: electronicImage
    },
    {
        id: 'toys',
        title: "Toys",
        image: toysImage
    },
    {
        id: 'beauty',
        title: "Beauty & Personal Care",
        image: beautyImage
    },
    {
        id: 'furniture',
        title: "Furniture",
        image: furnitureImage
    },
    {
        id: 'sports',
        title: "Sports & Fitness",
        image: sportsImage
    }
];


let selectedImages;

const productDetails = [];

let searchQuery = '';

const filterSelections = {
    low_to_high: false,
    high_to_low: false,
    pay_on_delivery: false,
    discount: null,
    stock: false,
    rating: false,
    rating_value : null
}


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
        selectedImages: selectedImages,
        productDetails: productDetails,
        searchQuery: searchQuery,
        filterSelections: filterSelections,
        checked: false,
        payOnDelivery: false,
        findProductExisting: false
    },
    reducers: {
        // Handler for display product card
        displaySelectedImages: (state, action) => {
            const product = action.payload;
            console.log('92', product);
            state.selectedImages = product;
        },
        //Show full details of the product
        showProductDetails: (state, action) => {
            window.scrollTo(0, 0);
            const product = action.payload;
            console.log(product);
            state.productDetails = product;
            state.findProductExisting = false;

        },

        findProduct: (state, action) => {
            const userSearch = action.payload;
            state.searchQuery = userSearch;
            console.log(state.searchQuery)
        },


        findProductOnSearch: (state, action) => {
            console.log("function called")
            const objectKey = Object.keys(state)
            const objectKeyString = objectKey.toString();
            const findValue = objectKeyString.includes(state.searchQuery);
            state.findProductExisting = findValue;
            console.log(findValue);
            // console.log(objectKeyString);
            // console.log(objectKey);
            // console.log(state.searchQuery);
        },

        trackValueOfFilters: (state, action) => {
            const name = event.target.name;
            const value = event.target.checked;
            const discountValue = action.payload;
            state.filterSelections.rating_value = action.payload.rating;
            console.log(name)
            console.log(value)
            // console.log(discountValue)
            // console.log(action.payload.rating);
            console.log(state.filterSelections.rating_value)
            state.filterSelections[name] = value;
            state.filterSelections[name] === state.filterSelections.discount ? state.filterSelections[name] = discountValue : state.filterSelections
            [name] = value;
            // state.findProductExisting[name] === state.filterSelections.rating ? state.filterSelections[name] = action.payload.rating : state.filterSelections[name] = value;
            if (state.filterSelections[name] !== state.filterSelections.low_to_high) {
                state.filterSelections.low_to_high = false;
            } else if (state.filterSelections[name] !== state.filterSelections.high_to_low) {
                state.filterSelections.high_to_low = false;
            }



        }
        // filterProductsWithRatingFourAndAbove: (state, action) => {
        //     const { category, event } = action.payload;
        //     const originalArray = state[category];
        //     console.log(current(originalArray));
        //     state.checked = event.target.checked;
        //     console.log(category)
        //     if (state.checked) {
        //         state[category] = state[category].filter((item) => item.rating > 4);
        //     } else {
        //         state[category] = originalArray;
        //     }
        // },
        // cashOnDeliveryFilter: (state, action) => {
        //     const {product, checked } = action.payload;
        //     const {category} = product.category;
        //     console.log(product.category, checked);
        //     // console.log("iiiiiiiiiiiiiii", action.payload)
        //     // console.log("iiiiiiiiiiiiiii",category , checked)
        //     if(checked === true)
        //     {state[product.category] = state[product.category].filter((item) => item.pay_on_delivery === true)}
        //     else {
        //        state[product.category] = state[product.category];
        //     }
        // }
    }
})

export const { displaySelectedImages, showProductDetails, findProduct, priceSortingLowToHigh, priceSortingHighToLow, filterProductsWithRatingFourAndAbove, cashOnDeliveryFilter, findProductOnSearch, setChecked, trackValueOfFilters } = productSlice.actions;

export default productSlice.reducer;