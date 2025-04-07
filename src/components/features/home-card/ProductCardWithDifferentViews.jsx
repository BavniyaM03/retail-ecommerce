import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ProductCardWithDifferentViews.css'
import { Container, Grid } from '@mui/material';
import { books } from '../../../Data/books-data';
import { useDispatch, useSelector } from 'react-redux';
import { displaySelectedImages } from '../../../Redux/productSlice';
1
export default function ProductCardWithDifferentViews({ products, idx }) {
    const dispatch = useDispatch();
    const selectedImages = useSelector((state) => state.products.selectedImages);
    console.log('selectedImages', selectedImages)
    return (
        <Container maxWidth='xl' sx={{ marginTop: 1 }}>
            <Grid container spacing={2.5}>

                <Grid item xs={12} sm={6} md={4} lg={3} >
                    <Card sx={{ maxWidth: 345 }}>



                        <div className='custom-cardsection-container'>
                            {selectedImages.idx === 0 ? (<>
                                <Typography className='custom-card-title lato-bolder' gutterBottom variant="h6" component="div">
                                    {selectedImages.item.name}
                                </Typography>
                                <section className='product-card-image-box'>
                                    {/* <img className='card-with-multiple-small-images' src='https://m.media-amazon.com/images/I/61xKeolcI3L._AC_SY175_.jpg'></img> */}
                                    <img className='card-with-multiple-small-images' src={selectedImages.item.images}></img>
                                </section>

                                <CardContent>
                                    <Typography className='lato-regular' variant="body2" sx={{ color: 'black' }}>
                                        {/* {selectedImages.description.split("", 75)}... */}
                                    </Typography>
                                    <Typography className='lato-bold' variant='h6' >₹{selectedImages.item.price}</Typography>
                                </CardContent>
                            </>) : ('')}

                            <div className='views-container' >
                                {products.map((item) => (
                                    <section className='different-views' onClick={() => dispatch(displaySelectedImages({ item: item, idx: idx }))}>
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


            </Grid >
        </Container>
    );
}
