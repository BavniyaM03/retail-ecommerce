import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import './ProductCard.css'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { showProductDetails } from '../../../Redux/productSlice';
1
export default function ProductCard({products}) {
    // const navigate = useNavigate();
    // const books = useSelector((state) => state.products.books);
    // console.log(books.length);
    // const temp = books.slice(0, 4);
    // console.log(temp);

    // const handleClick = (id) =>{
    //     navigate(`/product/${id}`)
    // }

   

    const dispatch = useDispatch();

    console.log( '4 products', products);
    return (
        <Container maxWidth='xl' sx={{ marginTop: 1 }}>
            <Grid container spacing={2.5}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>

                        <Typography className='custom-card-title lato-bolder' gutterBottom variant="h6" component="div">
                            Keep Shopping For
                        </Typography>

                        <div className='custom-cardsection-container'>
                            {products.map((item, index) => (
                                <NavLink to={`/product/${item.id}`}><section className='custom-productcard-section' onClick={()=>dispatch(showProductDetails(item))} >
                                <img className='productcard-images' src={item.cover_image}></img>
                            </section></NavLink>
                            ))}
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
