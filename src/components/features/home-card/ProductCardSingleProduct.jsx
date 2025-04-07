import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import { books } from '../../../Data/books-data';
import './ProductCardSingleProduct.css'
import { useSelector } from 'react-redux';


export default function ProductCardSingleProduct() {
    const  mobilesItem = useSelector((state)=>state.products.mobile.mobiles);
    console.log(mobilesItem);
    return (
        <Container maxWidth='xl' sx={{ marginTop: 1 }}>
        <Grid container spacing={2.5}>
            {mobilesItem.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Card sx={{ maxWidth: 345}}>

                        <Typography className='custom-card-title lato-bolder' gutterBottom variant="h6" component="div">
                            {item.name}
                        </Typography>

                        <div className='custom-cardsection-container'>

                         <section className='singleproduct-card-image-section'>
                            <img src={item.images}></img>
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
