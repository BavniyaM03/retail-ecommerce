import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ReusableProduct } from "../Common-Components/ReusableProduct"
import ReusableSlider from '../Common-Components/ReusableSlider';
import ReusablePopup from '../Common-Components/ReusablePopup';
import ReusablePopupProduct from '../Common-Components/ReusablePopupProduct';
import { ReusableReviewRatingBox } from '../Common-Components/ReusableReviewRatingBox';

export const Product = () => {
    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="xl">
                    <Box sx={{ bgcolor: '#fff', height: '100%', marginTop: 10 }} >
                        <ReusableProduct />
                    </Box>

                    <Box sx={{ bgcolor: '#fff', height:'100%'}} >
                        <ReusableReviewRatingBox />
                    </Box>


                    <Box sx={{ marginTop: 1.5 }}>
                        <ReusableSlider />
                    </Box>


                    <ReusablePopup />
                    <ReusablePopupProduct />

                </Container>
            </React.Fragment>

        </>
    )
}