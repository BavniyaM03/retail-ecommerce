import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReusableSliderProduct } from './ReusableSliderProduct';
import { Typography } from '@mui/material';

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
    const settings = {
        slidesToShow: 5,
        slidesToScroll: 6,
        speed: 500,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
            <Typography variant='h5' sx={{paddingBottom:'20px', paddingTop : '20px'}}>Product Related to This Item</Typography>
            <Slider {...settings} >

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
                </div>

                <div>
                    <ReusableSliderProduct />
                </div>

                <div>
                    <ReusableSliderProduct />
                </div>

            </Slider>
        </div>
    );
}