import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { ReusableShoppingCard } from "../Common-Components/ReusableShoppingCard"

export const CartItem = () => {
    return (
    
          <React.Fragment>
                <CssBaseline />
                <Container maxWidth="xl">
                    <Box sx={{ bgcolor: '#fff', minHeight: '100%', marginTop: 10 }} >
                    <ReusableShoppingCard/>
                    </Box>

                </Container>
            </React.Fragment>

    )
}