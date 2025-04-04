import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ProductCardWithDifferentViews.css'
import { Container, Grid } from '@mui/material';
import { books } from '../Data/books-data';
1
export default function ProductCardWithDifferentViews() {
    return (
        <Container maxWidth='xl' sx={{ marginTop: 1 }}>
            <Grid container spacing={2.5}>
                {books.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card sx={{ maxWidth: 345 }}>

                            <Typography className='custom-card-title lato-bolder' gutterBottom variant="h6" component="div">
                                {item.title}
                            </Typography>

                            <div className='custom-cardsection-container'>

                                <section className='.product-card-image-box'>
                                    <img className='.card-with-multiple-small-images' src='https://m.media-amazon.com/images/I/61xKeolcI3L._AC_SY175_.jpg'></img>
                                </section>

                                <CardContent>
                                    <Typography className='lato-regular' variant="body2" sx={{ color: 'black' }}>
                                        MAPPERZ Hair Root Applicator Bottle Applying Hair Oil Shampoo and Medicine 1…
                                    </Typography>
                                    <Typography className='lato-bold' variant='h6' >₹304</Typography>
                                </CardContent>

                                <div className='views-container' >
                                    <section className='different-views'>
                                        <img src="https://m.media-amazon.com/images/I/61xKeolcI3L._AC_SY55_.jpg" alt="" />
                                    </section>
                                    <section className='different-views'>
                                        <img src="https://m.media-amazon.com/images/I/61xKeolcI3L._AC_SY55_.jpg" alt="" />
                                    </section>
                                    <section className='different-views'>
                                        <img src="https://m.media-amazon.com/images/I/61xKeolcI3L._AC_SY55_.jpg" alt="" />
                                    </section>
                                    <section className='different-views'>
                                        <img src="https://m.media-amazon.com/images/I/61xKeolcI3L._AC_SY55_.jpg" alt="" />
                                    </section>
                                </div>

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
