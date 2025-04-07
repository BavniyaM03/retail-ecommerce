import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ReusableProductList } from "../components/features/all-product/ReusableProductList.jsx"
import { FilterBox } from '../components/features/all-product/FilterBox.jsx';
import ReusableDrawyerComponent from '../components/features/all-product/ReusableDrawyerComponent.jsx';

export const ProductList = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ bgcolor: '#fff', height: '100%', marginTop: 10, display : 'flex', gap: '25px' }} >
                    <FilterBox/>
                    <ReusableDrawyerComponent/>
                    <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'flex-start', gap:'20px'}}>
                    <ReusableProductList />
                    </Box>
                    
                </Box>
            </Container>
        </React.Fragment>

    )
}


