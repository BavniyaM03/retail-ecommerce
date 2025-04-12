import React, { useEffect, useState } from 'react';
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
    let product = useSelector((state) => state.products[category])
    const [productArray, setProductArray] = useState(product);
    const checked = useSelector((state) => state.products.checked)

    useEffect(() => {
        // switch (key) {
        //     case value:
                
        //         break;
        
        //     default:
        //         break;
        // }
        if (checked === true) {
            let payOnDeliveryProducts = product.filter((item) => item.pay_on_delivery === true);
            setProductArray(payOnDeliveryProducts);
        }
        else {
            setProductArray(product);
        }

    }, [checked])

    return (
        <>

            <div className="card-item-container">
                {productArray.map((item, index) => (
                    <Card key={index} sx={{ width: 280, height: 350 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={item.images ? item.images : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019"}
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




