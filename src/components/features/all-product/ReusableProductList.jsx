import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import './ReusableProductList.css'
import { useSelector } from 'react-redux';

export const ReusableProductList = () => {
    const fashion = useSelector((state)=>state.products.fashion.fashion)
    // console.log(13, bags);
    return (
        <>
            <div className="card-item-container">
                {fashion.map((item, index) => (
                    <Card key={index} sx={{ width: 280, height: 350 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={item.images}
                            alt="green iguana"
                            sx={{ objectFit :'contain' }}
                        />
                        {console.log(item.images)}
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




