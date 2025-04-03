import { CurrencyRupee, Favorite } from "@mui/icons-material"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Rating from '@mui/material/Rating';
import { Typography } from "@mui/material";
import { ReusableButton } from "./ReusableButton";
import ReactImageMagnify from 'react-image-magnify';

import './ReusableProduct.css'

export const ReusableProduct = () => {
    return (
        <>
            <div className="container">
                <div className="product-image-container">
                    <div className="wishlist-container">
                        <Favorite />
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
                                src: "https://m.media-amazon.com/images/I/71FYgvmvNAL._SX522_.jpg"
                            },
                            largeImage: {
                                src: "https://m.media-amazon.com/images/I/71FYgvmvNAL._SX522_.jpg",
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
                        {/* <img src="https://images-static.nykaa.com/media/catalog/product/b/8/b86cf32NYKAC00000193_2.jpg?tr=w-344,h-344,cm-pad_resize"></img> */}
                    </div>

                </div>

                <div className="product-details-container">

                    <div>
                        <Typography className="product-name" variant="h6">Nykaa Endless Nights Dark Desire Floral Amber Perfume for Women
                            (100ml)
                        </Typography>
                        <div className="rating-reviews">
                            <Rating name="read-only" value={2.5} readOnly precision={0.5} size="small" />
                            <Typography variant="captions">2.5/5 | 25 ratings & 8 reviews</Typography>
                        </div>
                        <div className="price-details">
                            {/* <Typography className="mrp" variant="captions">MRP :</Typography> */}
                            <Typography className="mrp" variant="h4"><CurrencyRupee />500/-</Typography>
                            <div><Typography variant="captions">Inclusive of all taxes</Typography></div>
                        </div>

                        <div className="product-description">
                            <Typography className=".product-description-header" variant="h6">Product Description</Typography>
                            <Typography variant="captions">Superior image quality and durability with the Egate S9 Pro projector. Its innovative sealed optical engine prevents dust accumulation, reducing overheating risks and enhancing lifespan. Enjoy improved picture quality, less maintenance, and long-lasting performance, making the S9 Pro the perfect choice for discerning home theater enthusiasts.</Typography>
                        </div>

                        <div className="add-to-cart-button-container">
                            <ReusableButton className="add-to-cart-button" variant="contained" value="Add to cart" />
                        </div>

                    </div>

                </div>




            </div >
        </>
    )
}