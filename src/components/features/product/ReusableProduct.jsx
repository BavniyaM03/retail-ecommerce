import { CurrencyRupee, Favorite } from "@mui/icons-material"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Rating from '@mui/material/Rating';
import { Typography } from "@mui/material";
import { ReusableButton } from "../../common/ui/ReusableButton";
import ReactImageMagnify from 'react-image-magnify';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import { useSnackbar } from 'notistack';


import './ReusableProduct.css'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Redux/cartSlice";
import { addToWishlist } from "../../../Redux/wishlistSlice";
import { current } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VerticalCarousel from "./VerticalCarousel";
import ReusablePopupProduct from "./ReusablePopupProduct";
// import VerticalCarousel from "./VerticalCarousel";


export const ReusableProduct = () => {
    const product = useSelector((state) => state.products.productDetails);
    const toggle = useSelector((state) => state.cartItem.toggle_button);
    const [open, setOpen] = useState(false);
    // console.log(toggle);
    const [previewImage, setPreviewImage] = useState()
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const images = product.images;
    const  videos  = product.video;

    console.log(product);
    const style = { tranform: `translate(0, 55px)` }

    // const handleVerticalScroll = (index) => {
    //     document.getSelection(index).style.transform = `translate(0, 50px)`
    // }
    // let index = 5;
    // let y = -65;
    // const handleVerticalScroll = () => {

    //     const elements = document.querySelectorAll('.small-images'); // replace with your actual class
    //     if (elements[index]) {
    //         elements[index].style.transform = `translateY(${y}px)`;
    //     }
    //     index ++;
    //     y * 2;
    // };


    const handleGotoCart = () => {
        navigate('/cartitem')
    }

    const handlerAddToCart = (product, event) => {
        dispatch(addToCart(product, event))
        enqueueSnackbar('Product Added to Cart');
    }

    const handleAddtoWishlist = (product) => {
        dispatch(addToWishlist(product))
        enqueueSnackbar('Product Added to Wishlist');
    }



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    // console.log(25, previewImage);
    return (
        <>
            <div className="container">
                <div className="product-image-container">
                    <div className="wishlist-container">
                        <FavoriteBorderTwoToneIcon onClick={() => handleAddtoWishlist(product)} />
                    </div>

                    {/* <div> */}
                    <div className="image-options">
                        <VerticalCarousel images={images} setPreviewImage={setPreviewImage} />
                        {/* {images?.map((image, index) => (
                                <section key={index} className="small-images" sx={{ backgroundColor: 'red' }}>
                                    <img src={image} onClick={() => setPreviewImage(image)}></img>
                                </section>
                            ))} */}

                        {/* <section className="small-images">
                            <img src="https://images-static.nykaa.com/media/catalog/product/b/8/b86cf32NYKAC00000193_1a.jpg"></img>
                        </section>
                        <section className="small-images">
                            <img src="https://images-static.nykaa.com/media/catalog/product/b/8/b86cf32NYKAC00000193_1a.jpg"></img>
                        </section>
                        <section className="small-images">
                            <img src="https://images-static.nykaa.com/media/catalog/product/b/8/b86cf32NYKAC00000193_1a.jpg"></img>
                        </section>
                        <section className="small-images">
                            <img src="https://images-static.nykaa.com/media/catalog/product/b/8/b86cf32NYKAC00000193_1a.jpg"></img>
                        </section> */}

                    </div>
                    {/* <div className="small-images-arrow">
                            <section><KeyboardArrowUpIcon /></section>
                            <section onClick={()=>handleVerticalScroll()}><KeyboardArrowDownIcon /></section>
                        </div> */}
                    {/* </div> */}


                    <div className="product-image" onClick={handleClickOpen}>
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: previewImage ? previewImage : product.images,
                            },
                            largeImage: {
                                src: previewImage ? previewImage : product.images,
                                width: 1200,
                                height: 1800
                            },
                            enlargedImageContainerDimensions: {
                                width: '245%',
                                height: '300%'
                            },
                            shouldUsePositiveSpaceLens: true,
                            enlargedImageContainerStyle: {
                                backgroundColor: '#fff',
                                zIndex: 9,
                                top: '-82px',
                                marginLeft: '45px'
                            }
                        }} />
                    </div>

                </div>

                <div className="product-details-container">

                    <div>
                        <Typography className="product-name" variant="h6">{product.title ? product.title : product.name}
                        </Typography>
                        <div className="rating-reviews">
                            <Rating name="read-only" value={product.rating} readOnly precision={0.5} size="small" />
                            <Typography variant="captions">{product.rating}/5 | 25 ratings & {product.reviews} reviews</Typography>
                        </div>
                        <div className="price-details">
                            <Typography className="mrp" variant="h4"><CurrencyRupee />{product.price}/-</Typography>
                            <div><Typography variant="captions">Inclusive of all taxes</Typography></div>
                        </div>

                        <div className="product-description">
                            <Typography className=".product-description-header" variant="h6">Product Description</Typography>
                            <Typography variant="captions">{product.description}</Typography>
                        </div>

                        <div className="add-to-cart-button-container">
                            {toggle === true ? (<ReusableButton onClick={(event) => handlerAddToCart(product, event)} className="add-to-cart-button" variant="contained" value="Add to cart" />) : (<ReusableButton onClick={handleGotoCart} className="add-to-cart-button" variant="contained" value="Go to cart" />)}
                        </div>
                    </div>
                </div>



                <ReusablePopupProduct handleClose={handleClose} open={open} images={images} videos={videos} />
            </div >

        </>
    )
}