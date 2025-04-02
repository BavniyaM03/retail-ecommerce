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
        // <Card sx={{ maxWidth: 350, padding: 2, margin: 2 }}>
        //     <Typography variant='h6' sx={{ fontWeight: 'bold' }} >Continue Shopping Deals</Typography>
        //     <Box
        //         sx={{
        //             display: 'flex',
        //             flexWrap: 'wrap',
        //             justifyContent: 'center',
        //             paddingTop: 2,
        //             paddingBottom: 2,
        //             bgcolor: '#fff',
        //         }}
        //     >

        //         <Box component="section" sx={{ p: 2, border: '1px dashed grey', width: 200, height: 150 }}>
        //             <Typography variant='caption'>Product Name</Typography>
        //             <Typography variant='caption' ><CurrencyRupeeSharp />304</Typography>
        //         </Box>

        //         <CardContent>
        //             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        //                 MAPPERZ Hair Root Applicator Bottle Applying Hair Oil Shampoo and Medicine 1…
        //             </Typography>
        //             <Typography variant='caption' ><CurrencyRupeeSharp />304</Typography>
        //         </CardContent>


        //         <Box component="section" sx={{ display: 'flex', justifyContent: 'space-between', width: 300, height: 72, bgcolor: 'gray' }}>
        //             <Box component="section" sx={{ p: 2, border: '1px dashed grey', width: 70, height: 72, bgcolor: '#fff' }}></Box>
        //             <Box component="section" sx={{ p: 2, border: '1px dashed grey', width: 70, height: 72, bgcolor: '#fff' }}></Box>
        //             <Box component="section" sx={{ p: 2, border: '1px dashed grey', width: 70, height: 72, bgcolor: '#fff' }}></Box>
        //             <Box component="section" sx={{ p: 2, border: '1px dashed grey', width: 70, height: 72, bgcolor: '#fff' }}></Box>
        //         </Box>



        //         {/* 
        //         <Paper elevation={0}><Typography variant='caption'>Product Name</Typography>
        //             <Typography variant='caption' ><CurrencyRupeeSharp />304</Typography></Paper> */}




        //     </Box>


        //     <CardActions>
        //         <Button size="small">See More</Button>
        //     </CardActions>
        // </Card>
    );
}
