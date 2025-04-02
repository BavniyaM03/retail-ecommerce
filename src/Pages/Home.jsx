import React, { Suspense } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Hero } from '../Components/Hero';
// import SimpleSlider from '../Components/ImageSlider';
import Card from '../Components/ProductCard';
// import ProductCard from '../Components/ProductCard';
const ProductCard = React.lazy(() => import('../Components/ProductCard'))
// import ProductCardWithCaptions from '../Components/ProductCardWithCaptions'
const ProductCardWithCaptions = React.lazy(() => import('../Components/ProductCardWithCaptions'))
// import ProductCardWithDifferentViews from '../Components/ProductCardWithDifferentViews';
const ProductCardWithDifferentViews = React.lazy(() => import('../Components/ProductCardWithDifferentViews'))
// import ProductCardSingleProduct from '../Components/ProductCardSingleProduct';
const ProductCardSingleProduct = React.lazy(() => import('../Components/ProductCardSingleProduct'))
import { ReusableLoadingSymbol } from '../Common-Components/ReusableLoadingSymbol';

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
                        <Suspense fallback={<ReusableLoadingSymbol />}>
                            <ProductCard />
                        </Suspense>
                        {/* <ProductCard />
                            <ProductCard />
                            <ProductCard /> */}
                        {/* </Box> */}
                        {/* <Box sx={{ display: 'flex', margin: 'auto' }}> */}
                        <Suspense fallback={<ReusableLoadingSymbol />}>
                            <ProductCardWithCaptions />
                        </Suspense>
                        {/* <ProductCardSecond />
                            <ProductCardSecond />
                            <ProductCardSecond /> */}
                        {/* </Box> */}
                        {/* <Box sx={{ display: 'flex', margin: 'auto' }}> */}
                        <Suspense fallback={<ReusableLoadingSymbol />}>
                        <ProductCardWithDifferentViews />
                        </Suspense>
                        {/* <ProductCardWithDifferentViews />
                            <ProductCardWithDifferentViews />
                            <ProductCardWithDifferentViews /> */}
                        {/* </Box> */}
                        <Suspense fallback={<ReusableLoadingSymbol />}>
                            <ProductCardSingleProduct />
                        </Suspense>

                    </Box>

                </Container>
            </React.Fragment>

        </>
    )
}

