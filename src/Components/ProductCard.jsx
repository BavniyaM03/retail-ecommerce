import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { books } from '../Data/books-data';
import './ProductCard.css'
1
export default function ProductCard() {

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
                                <section className='custom-productcard-section'>
                                    <img className='productcard-images' src='https://m.media-amazon.com/images/I/61pQniOIAtL._AC_SY145_.jpg'></img>
                                </section>
                                <section className='custom-productcard-section'>
                                    <img className='productcard-images' src='https://m.media-amazon.com/images/I/71JnHSZwbjL._AC_SY145_.jpg'></img>
                                </section>
                                <section className='custom-productcard-section'>
                                    <img className='productcard-images' src='https://m.media-amazon.com/images/I/612IJO2dF0L._AC_SY145_.jpg'></img>
                                </section>
                                <section className='custom-productcard-section'>
                                    <img className='productcard-images' src='https://m.media-amazon.com/images/I/51dbaVBlaNL._AC_SY145_.jpg'></img>
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
