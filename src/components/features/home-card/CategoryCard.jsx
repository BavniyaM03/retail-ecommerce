import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import './CategoryCard.css'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { showProductDetails } from '../../../Redux/productSlice';

export default function ProductCardWithCaptions() {
    const electronicProducts = useSelector((state) => state.products.electronic)
    const dispatch = useDispatch();
// console.log(electronicProducts);

    return (
        electronicProducts.map((element, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card sx={{ maxWidth: 345, height: 415 }}>

                    <Typography className='custom-card-title lato-bolder' gutterBottom variant="h6" component="div">
                        {/* {item.title} */}
                    </Typography>

                    <div className='custom-card-section-container'>
                        {element.map((item, index) => (
                            <NavLink key={index} to={`/product/${item.id}`}>
                                <section key={index} className='custom-productcard-section-with-captions' onClick={()=>dispatch(showProductDetails(item))}>
                                    <secion className='custom-productcard-section-images'>
                                        <img className='custom-postcard-images' src={item.images}></img>
                                    </secion>
                                    <section className='custom-productcard-caption-container'>
                                        <Typography className='postcard-section'
                                            variant='caption'
                                            sx={{ lineHeight: 'normal' }} >
                                            {item.name}
                                        </Typography>
                                    </section>
                                </section>
                            </NavLink>
                        ))}

                    </div>

                    <CardActions>
                        <Button size="small">Show more</Button>
                    </CardActions>
                </Card>
            </Grid>
        ))

    )
}