import { CurrencyRupee, Favorite } from "@mui/icons-material"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Rating from '@mui/material/Rating';
import { Typography } from "@mui/material";
import { ReusableButton } from "../../common/ui/ReusableButton";
import ReactImageMagnify from 'react-image-magnify';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';

import './ReusableProduct.css'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Redux/cartSlice";
import { addToWishlist } from "../../../Redux/wishlistSlice";

export const ReusableProduct = () => {
    const product = useSelector((state)=>state.products.productDetails);
    const dispatch = useDispatch();
    return (
        <>
            <div className="container">
                <div className="product-image-container">
                    <div className="wishlist-container">
                        <FavoriteBorderTwoToneIcon onClick={()=>dispatch(addToWishlist(product))} />  
                    </div>

                    <div className="image-options">
                        <section className="small-images">
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
                        </section>
                        <section className="small-images">
                            <img src="https://images-static.nykaa.com/media/catalog/product/b/8/b86cf32NYKAC00000193_1a.jpg"></img>
                        </section>
                        <div className="small-images-arrow">
                            <section><KeyboardArrowUpIcon /></section>
                            <section><KeyboardArrowDownIcon /></section>
                        </div>
                    </div>

                    <div className="product-image">
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: product.cover_image ? product.cover_image : product.images
                            },
                            largeImage: {
                                src: product.cover_image ? product.cover_image : product.images,
                                width: 1200,
                                height: 1800
                            },
                            enlargedImageContainerDimensions: {
                                width: '245%',
                                height: '300%'
                            },
                            shouldUsePositiveSpaceLens: true,
                            enlargedImageContainerStyle	: {
                                backgroundColor:'#fff',
                                zIndex: 9,
                                top: '-82px',
                                marginLeft : '45px'
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
                            <ReusableButton onClick={()=>dispatch(addToCart(product))} className="add-to-cart-button" variant="contained" value="Add to cart" />
                        </div>

                    </div>

                </div>




            </div >
        </>
    )
}