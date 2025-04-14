import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReusableSliderProduct } from './ReusableSliderProduct';
import { Typography } from '@mui/material';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showProductDetails } from '../../../../Redux/productSlice';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`arrow ${className}`}
            onClick={onClick}
        >
            <ArrowBackIosIcon class="arrows" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`arrow ${className}`} onClick={onClick}>
            <ArrowBackIosIcon class="arrows" />
        </div>
    );
}

export default function ReusableSlider({ infinite, slidesToShow, slidesToScroll, autoplay, speed, cssEase, adaptiveHeight, fade }) {
    const category = useParams();
    const product = useSelector((state) => state.products.productDetails);
    const productCategory = product.category;
    console.log(productCategory);
    const relatedProducts = useSelector((state) => state.products[productCategory]);
    const dispatch = useDispatch();
    

    const settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]

    };
    return (
        <div className="slider-container"  >
            <Typography variant='h5' sx={{ paddingBottom: '20px', paddingTop: '20px' }}>Product Related to This Item</Typography>
            <Slider {...settings} >
                {relatedProducts?.map((item) => (
                    <div>
                        <NavLink to={`/product/${item.id}`} onClick={()=>dispatch(showProductDetails(item))}>
                        <ReusableSliderProduct item={item}/>
                        </NavLink>
                    </div>

                 ))} 

                {/* <div>
                    <ReusableSliderProduct />
                </div>

                <div>
                    <ReusableSliderProduct />
                </div>

                <div>
                    <ReusableSliderProduct />
                </div>

                <div>
                    <ReusableSliderProduct />
                </div>

                <div>
                    <ReusableSliderProduct />
                </div> */}

            </Slider>
        </div>
    );
}