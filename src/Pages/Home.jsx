import React, { Suspense } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Hero } from '../Components/Hero';
const ProductCard = React.lazy(() => import('../Components/ProductCard'))
const ProductCardWithCaptions = React.lazy(() => import('../Components/ProductCardWithCaptions'))
const ProductCardWithDifferentViews = React.lazy(() => import('../Components/ProductCardWithDifferentViews'))
const ProductCardSingleProduct = React.lazy(() => import('../Components/ProductCardSingleProduct'))
import { ReusableLoadingSymbol } from '../Common-Components/ReusableLoadingSymbol';

export const Home = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100%', marginTop: 1 }} >
                    <Hero />
                    <Suspense fallback={<ReusableLoadingSymbol />}>
                        <ProductCard />
                    </Suspense>
                    <Suspense fallback={<ReusableLoadingSymbol />}>
                        <ProductCardWithCaptions />
                    </Suspense>
                    <Suspense fallback={<ReusableLoadingSymbol />}>
                        <ProductCardWithDifferentViews />
                    </Suspense>
                    <Suspense fallback={<ReusableLoadingSymbol />}>
                        <ProductCardSingleProduct />
                    </Suspense>

                </Box>

            </Container>
        </React.Fragment>

    )
}

