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
import { Container, Grid } from '@mui/material';
import { books } from '../Data/books-data';
import './ProductCardWithCaptions.css'

export default function ProductCardWithCaptions() {
    return (
        <Container maxWidth='xl' sx={{ marginTop: 1 }}>
            <Grid container spacing={2.5}>
                {books.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card sx={{ maxWidth: 345}}>

                            <Typography className='custom-card-title lato-bolder' gutterBottom variant="h6" component="div">
                                {item.title}
                            </Typography>

                            <div className='custom-card-section-container'>

                                <section className='custom-productcard-section-with-captions'>
                                    <secion className='custom-productcard-section-images'>
                                        <img className='custom-postcard-images' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg'></img>
                                    </secion>
                                    <section className='custom-productcard-caption-container'>
                                        <Typography className='postcard-section'
                                            variant='caption'
                                            sx={{ lineHeight: 'normal' }} >
                                            {item.title}
                                        </Typography>
                                    </section>
                                </section>

                                <section className='custom-productcard-section-with-captions'>
                                    <secion className='custom-productcard-section-images'>
                                        <img className='custom-postcard-images' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg'></img>
                                    </secion>
                                    <section className='custom-productcard-caption-container'>
                                        <Typography className='postcard-section'
                                            variant='caption'
                                            sx={{ lineHeight: 'normal' }} >
                                            {item.title}
                                        </Typography>
                                    </section>
                                </section>

                                <section className='custom-productcard-section-with-captions'>
                                    <secion className='custom-productcard-section-images'>
                                        <img className='custom-postcard-images' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg'></img>
                                    </secion>
                                    <section className='custom-productcard-caption-container'>
                                        <Typography className='postcard-section'
                                            variant='caption'
                                            sx={{ lineHeight: 'normal' }} >
                                            {item.title}
                                        </Typography>
                                    </section>
                                </section>

                                <section className='custom-productcard-section-with-captions'>
                                    <secion className='custom-productcard-section-images'>
                                        <img className='custom-postcard-images' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg'></img>
                                    </secion>
                                    <section className='custom-productcard-caption-container'>
                                        <Typography className='postcard-section'
                                            variant='caption'
                                            sx={{ lineHeight: 'normal' }} >
                                            {item.title}
                                        </Typography>
                                    </section>
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
        //             '& > :not(style)': {
        //                 m: 1,
        //                 width: 128,
        //                 height: 128,
        //                 display: 'flex',
        //                 justifyItems: 'center',
        //                 bgcolor: 'grey'
        //                 // alignItems : 'center'
        //             },
        //         }}
        //     >

        //         <Paper elevation={3}><Typography variant='caption'>Product Name</Typography>
        //             <Typography variant='caption' ><CurrencyRupeeSharp />304</Typography></Paper>
        //         <Paper elevation={3}><Typography variant='caption'>Product Name</Typography>
        //             <Typography variant='caption' ><CurrencyRupeeSharp />304</Typography></Paper>
        //         <Paper elevation={3}><Typography variant='caption'>Product Name</Typography>
        //             <Typography variant='caption' ><CurrencyRupeeSharp />304</Typography></Paper>
        //         <Paper elevation={3}><Typography variant='caption'>Product Name</Typography>
        //             <Typography variant='caption' ><CurrencyRupeeSharp />304</Typography></Paper>


        //     </Box>


        //     <CardActions>
        //         <Button size="small">See More</Button>
        //     </CardActions>
        // </Card>
    );
}
