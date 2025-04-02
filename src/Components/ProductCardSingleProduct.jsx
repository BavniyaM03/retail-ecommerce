import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { CurrencyRupeeSharp } from '@mui/icons-material';
import { Container, Grid } from '@mui/material';
import { books } from '../Data/books-data';
import './ProductCardSingleProduct.css'

export default function ProductCardSingleProduct() {
    return (
        <Container maxWidth='xl' sx={{ marginTop: 1 }}>
        <Grid container spacing={2.5}>
            {books.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Card sx={{ maxWidth: 345}}>

                        <Typography className='custom-card-title lato-bolder' gutterBottom variant="h6" component="div">
                            {item.title}
                        </Typography>

                        <div className='custom-cardsection-container'>

                         <section className='singleproduct-card-image-section'>
                            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/2025/PC_CC_379X304._SY304_CB548056687_.jpg'></img>
                         </section>
                           
                        </div>

                        <CardActions>
                            <Button size="small">Show more</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}

        </Grid >
    </Container>
    );
}
