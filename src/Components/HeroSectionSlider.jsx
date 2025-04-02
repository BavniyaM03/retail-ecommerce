import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import React from "react";
import Slider from "react-slick";
import { sliderImages } from '../assets/slider-images/slider-images'
import './HeroSectionSlider.css'

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

// style={{ ...style, display: "block", background: "green", height: '85px', width: '40px', zIndex: 9, left: 0, color: 'black', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`arrow ${className}`} onClick={onClick}>
            <ArrowBackIosIcon class="arrows" />
        </div>
    );
}

export default function HeroSectionSlider() {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        // autoplaySpeed: 2000,
        cssEase: "linear",
        adaptiveHeight: true,
        fade: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 3
                }
            }
        ]

    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {/* {sliderImages.map((img) => {
                <div>
                    <img style={{ height: '250px' }} src={img} />
                </div>
            })} */}

                <div>
                    <img style={{ height: '250px' }} src={sliderImages[0]} />
                </div>

                <div>
                    <img style={{ height: '250px' }} src={sliderImages[1]} />
                </div>

                <div>
                    <img style={{ height: '250px' }} src={sliderImages[2]} />
                </div>

                <div>
                    <img style={{ height: '250px' }} src={sliderImages[3]} />
                </div>
                {/* <div>
                <img style={{ height: '250px' }} src="../assets/slider-images/slider2.webp" srcset="" />
            </div>
            <div>
                <img style={{ height: '250px' }} src="https://unsplash.com/photos/a-hunter-with-his-eagle-on-horseback-Qvo-74IGtgU"  srcset="" />
            </div> */}

                {/* <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div> */}

                {/* {sliderImages.map((img, index) => {
                <div key={index}>
                    <img src={img} alt="loading" srcset="" />
                    <h1>Loading</h1>
                </div>
                console.log(img)
            })}
            {console.log(sliderImages)} */}

            </Slider>
        </div>
    );
}