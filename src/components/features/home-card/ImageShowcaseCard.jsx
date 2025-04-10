import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import './ImageShowcaseCard.css'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { showProductDetails } from '../../../Redux/productSlice';


export default function ImageShowcaseCard({ products }) {
    const mobilesItem = useSelector((state) => state.products.mobile.mobiles);
    const dispatch = useDispatch();
    // console.log(mobilesItem);
    return (
        products.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card sx={{ maxWidth: 345 }}>
                    <NavLink to={`/product/${item.id}`} onClick={()=>dispatch(showProductDetails(item))}>
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
                    </NavLink>
                </Card>
            </Grid>
        ))
    );
}
