import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Hero } from '../Components/Hero';
// import SimpleSlider from '../Components/ImageSlider';
import Card from '../Components/ProductCard';
import ProductCard from '../Components/ProductCard';
import ProductCardWithCaptions from '../Components/ProductCardWithCaptions'
import ProductCardWithDifferentViews from '../Components/ProductCardWithDifferentViews';
import ProductCardSingleProduct from '../Components/ProductCardSingleProduct';

export const Home = () => {
    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="xl">
                    <Box sx={{ bgcolor: '#cfe8fc', height: '100%', marginTop: 1 }} >
                        <Hero />
                        {/* <SimpleSlider /> */}
                        {/* <Box sx={{ display: 'flex', margin: 'auto' }}> */}
                            <ProductCard />
                            {/* <ProductCard />
                            <ProductCard />
                            <ProductCard /> */}
                        {/* </Box> */}
                        {/* <Box sx={{ display: 'flex', margin: 'auto' }}> */}
                            <ProductCardWithCaptions />
                            {/* <ProductCardSecond />
                            <ProductCardSecond />
                            <ProductCardSecond /> */}
                        {/* </Box> */}
                        {/* <Box sx={{ display: 'flex', margin: 'auto' }}> */}
                            <ProductCardWithDifferentViews />
                            {/* <ProductCardWithDifferentViews />
                            <ProductCardWithDifferentViews />
                            <ProductCardWithDifferentViews /> */}
                        {/* </Box> */}

                        <ProductCardSingleProduct />

                    </Box>

                </Container>
            </React.Fragment>

        </>
    )
}

