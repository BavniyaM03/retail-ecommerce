import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ReusableProductList } from "../Common-Components/ReusableProductList"

export const ProductList = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ bgcolor: '#fff', height: '100%', marginTop: 10 }} >
                    <ReusableProductList />
                </Box>
            </Container>
        </React.Fragment>

    )
}