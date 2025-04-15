import React, { Component, useState } from "react";
import Slider from "react-slick";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './VerticalCarousel.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`arrow ${className}`}
            style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid gray', color: 'gray', position: 'fixed', top: '520px', left: '360px' }}
            onClick={onClick}
        >
            <KeyboardArrowUpIcon class="arrows" />
        </div>
    );
}

// style={{ ...style, display: "block", background: "green", height: '85px', width: '40px', zIndex: 9, left: 0, color: 'black', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`arrow ${className}`}
            style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid gray', color: 'gray', position: 'fixed', top: '520px', left: '390px' }}
            onClick={onClick}>

            <KeyboardArrowDownIcon class="arrows" />
        </div>
    );
}



function VerticalCarousel({ images, setPreviewImage }) {
    // console.log(onClick);
    // const [previewImage, setPreviewImage] = useState()
    const settings = {
        // dots: true,
        // infinite: true,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: true,
        // arrows: false,

        nextArrow: <SamplePrevArrow />,
        prevArrow: <SampleNextArrow />
        // verticalSwiping: true,
        // beforeChange: function (currentSlide, nextSlide) {
        //     console.log("before change", currentSlide, nextSlide);
        // },
        // afterChange: function (currentSlide) {
        //     console.log("after change", currentSlide);
        // }
    };
    return (
        // <div className="slider-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink' }}>
        <Slider {...settings}>
            {images?.map((image, index) => (
                <section className="small-images" style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={image} onClick={()=>setPreviewImage(image)}></img>
                </section>
            ))}
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
        </Slider>
        // </div>
    );
}

export default VerticalCarousel;
