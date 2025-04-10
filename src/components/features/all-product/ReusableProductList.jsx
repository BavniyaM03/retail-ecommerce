import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import './ReusableProductList.css'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const ReusableProductList = () => {
    const routeParam = useParams();
    const category = routeParam.category;
    const product = useSelector((state) => state.products[category])
    console.log(product)
    return (
        <>
            <div className="card-item-container">
                {product.map((item, index) => (
                    <Card key={index} sx={{ width: 280, height: 350 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={item.images ? item.images : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019" }
                            alt="green iguana"
                            sx={{ objectFit: 'contain' }}
                        />
                        {/* {console.log(item.images)} */}
                        <CardContent>
                            <Typography className='product-title' gutterBottom variant="h6" component="div">
                                {item.title}
                            </Typography>
                            <Typography className="mrp-value" variant="body2">Rs. {item.price}</Typography>
                            <div className='rating-value-star'><Rating name="read-only" value={item.rating} readOnly precision={0.5} size="small" /><Typography variant='captions'>{item.rating}</Typography></div>
                        </CardContent>

                    </Card>
                ))}
            </div>
        </>
    )
}




