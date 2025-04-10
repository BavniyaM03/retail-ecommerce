import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ReusableWishlistItem } from '../components/features/wishlist/ReusableWishlistItem';

export const WishlistItem = () => {
    return (

        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ bgcolor: '#fff', minHeight: '100%', marginTop: 10 }} >
                    <ReusableWishlistItem />
                </Box>

            </Container>
        </React.Fragment>

    )
}