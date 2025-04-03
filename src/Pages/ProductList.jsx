import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ReusableProductList } from "../Common-Components/ReusableProductList"
import { FilterBox } from '../Components/FilterBox';
import ReusableDrawyerComponent from '../Common-Components/ReusableDrawyerComponent.jsx';

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
                    <ReusableProductList />
                    <ReusableProductList />
                    </Box>
                    
                </Box>
                {/* <Box sx={{ bgcolor: '#fff', height: '100%', marginTop: 10 }} > */}
                    
                {/* </Box> */}
            </Container>
        </React.Fragment>

    )
}


