import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './DetailedProductCard.css'
import { Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { displaySelectedImages, showProductDetails } from '../../../Redux/productSlice';
import { NavLink } from 'react-router-dom';
1
export default function DetailedProductCard({ products, idx }) {
    const dispatch = useDispatch();
    const selectedImages = useSelector((state) => state.products.selectedImages);
    // console.log("", typeof selectedImages);
    const bags = useSelector((state) => state.products.bags.bags)
    // console.log('bags', bags)
    return (
        bags.map((element, index) => (<Grid item xs={12} sm={6} md={4} lg={3} >
            <Card sx={{ maxWidth: 345, height: 415 }}>
                <div className='custom-cardsection-container'>
                    <Typography
                        className='custom-card-title lato-bolder'
                        gutterBottom
                        variant="h6"
                        component="div">
                        {element[0].name}
                    </Typography>
                    <NavLink to={`/product/${element.id}`} onClick={()=>dispatch(showProductDetails(element))}>
                        <section className='product-card-image-box'>
                            <img
                                className='card-with-multiple-small-images'

                                src={selectedImages === undefined ? element[0].images : (selectedImages.index === index ? selectedImages.item.images : element[0].images)}
                            // src={selectedImages === undefined ? element[0].images : selectedImages.item.images} 
                            />
                        </section>

                        <CardContent>
                            <Typography
                                className='lato-regular'
                                variant="body2"
                                sx={{ color: 'black' }}>
                                {element[index].description.split("", 75)}...
                            </Typography>
                            <Typography
                                className='lato-bold'
                                variant='h6' >
                                ₹{element[0].price}
                            </Typography>
                        </CardContent>
                    </NavLink>

                    <div className='views-container' >
                        {element.map((item) => (
                            <section className='different-views'
                                onClick={() => dispatch(displaySelectedImages({ item, index }))}>
                                <img src={item.images} alt="" />
                            </section>
                        ))}
                    </div>
                </div>

                <CardActions>
                    <Button size="small">Show more</Button>
                </CardActions>
            </Card>
        </Grid>
        ))
    );
}
