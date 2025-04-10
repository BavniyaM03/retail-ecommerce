import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import './HeadlineProductCard.css'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { showProductDetails } from '../../../Redux/productSlice';
1
export default function HeadlineProductCard({ products }) {
    const books = useSelector((state) => state.products.books);
    const dispatch = useDispatch();

    // console.log('4 products', products);
    return (
        books.map((element, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ maxWidth: 345, height: 415 }}>

                    <Typography className='custom-card-title lato-bolder' gutterBottom variant="h6" component="div">
                        Keep Shopping For
                    </Typography>

                    <div className='custom-cardsection-container'>
                        {element.map((item, index) => (
                            <NavLink key={index} to={`/product/${item.id}`}><section className='custom-productcard-section' onClick={() => dispatch(showProductDetails(item))} >
                                <img className='productcard-images' src={item.cover_image}></img>
                            </section></NavLink>
                        ))}
                    </div>



                    <CardActions>
                        <Button size="small">Show more</Button>
                    </CardActions>
                </Card>

            </Grid>
        ))

        // </Grid >


        // </Container>



    );
}
