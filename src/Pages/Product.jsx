import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ReusableProduct } from "../components/features/product/ReusableProduct"
import ReusableSlider from '../components/features/product/related-products/ReusableSlider'
import ReusablePopupProduct from '../components/features/product/ReusablePopupProduct';
import { ReusableReviewRatingBox } from '../components/features/product/review-rating/ReusableReviewRatingBox';
import { useParams } from 'react-router-dom';

export const Product = () => {
    const param = useParams();
    console.log('14', param)
    return (

        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ bgcolor: '#fff', height: '100%', marginTop: 10 }} >
                    <ReusableProduct />
                </Box>

                <Box sx={{ bgcolor: '#fff', height: '100%' }} >
                    <ReusableReviewRatingBox />
                </Box>


                <Box sx={{ marginTop: 1.5 }}>
                    <ReusableSlider />
                </Box>

                <ReusablePopupProduct />

            </Container>
        </React.Fragment>


    )
}