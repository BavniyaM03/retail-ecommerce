import React, { Suspense } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Hero } from '../components/features/home/Hero';
const HeadlineProductCard = React.lazy(() => import('../components/features/home-card/HeadlineProductCard'))
const ProductCardWithCaptions = React.lazy(() => import('../components/features/home-card/CategoryCard'))
const DetailedProductCard = React.lazy(() => import('../components/features/home-card/DetailedProductCard'))
const ImageShowcaseCard = React.lazy(() => import('../components/features/home-card/ImageShowcaseCard'))
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

export const Home = () => {
    const mobilesItem = useSelector((state) => state.products.mobile.mobiles);
    const beauty = useSelector((state) => state.products.beauty.beauty_cosmetics);
    const fashion =useSelector((state)=>state.products.fashion.fashion);
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100%', marginTop: 1 }} >
                    <Hero />
                    <Container maxWidth='xl' sx={{ marginTop: 1 }}>
                        <Grid container spacing={2.5} sx={{ bgcolor: 'red' }}>
                            <HeadlineProductCard />
                            <ProductCardWithCaptions />
                            <DetailedProductCard />
                            <ImageShowcaseCard products={mobilesItem} />
                            <ImageShowcaseCard products={beauty} />
                            <ImageShowcaseCard products={fashion} />
                        </Grid >
                    </Container>
                </Box>
            </Container>
        </React.Fragment>

    )
}

