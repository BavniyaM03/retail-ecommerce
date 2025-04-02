import React from "react";
import Slider from "react-slick";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { sliderImages } from '../assets/slider-images/slider-images'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`arrow ${className}`} onClick={onClick}>
            <ArrowBackIosIcon class="arrows" />
        </div>
    );
}

export default function ReusableRelatedProduct() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
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

                <Container maxWidth='xl' sx={{ marginTop: 1 }}>
                    <Grid container spacing={2.5}>
                        {books.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <Card sx={{ maxWidth: 220 }}>

                                    <Typography className='custom-card-title lato-bolder' gutterBottom variant="h6" component="div">
                                        {item.title}
                                    </Typography>

                                    <div className='custom-cardsection-container'>

                                        <section className='product-card-image-section'>
                                            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/2025/PC_CC_379X304._SY304_CB548056687_.jpg'></img>
                                        </section>

                                    </div>

                                    <CardActions>
                                        <Button size="small">Show more</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}

                    </Grid >
                </Container>

                {/* <div>
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
              */}
            </Slider>
        </div>
    );
}

