import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Rating } from '@mui/material';
import './ReusableProductList.css'
import { books } from '../Data/books-data'

export const ReusableProductList = () => {
    return (
        <>
            <div className="card-item-container">
                {books.map((item, index) => (
                    <Card sx={{ width: 280, height: 350 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://rukminim2.flixcart.com/image/312/312/xif0q/smartwatch/i/4/b/-original-imah2thy4cphhcbe.jpeg?q=70&crop=false"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography className='product-title' gutterBottom variant="h6" component="div">
                                {item.title}
                            </Typography>
                            <Typography className="mrp-value" variant="body2">Rs. 500/-</Typography>
                            <div className='rating-value-star'><Rating name="read-only" value={2.5} readOnly precision={0.5} size="small" /><Typography variant='captions'>2.5</Typography></div>
                        </CardContent>

                    </Card>
                ))}
            </div>
        </>
    )
}




