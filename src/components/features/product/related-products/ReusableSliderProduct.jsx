import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { CurrencyRupee } from '@mui/icons-material';
import './ReusableSliderProduct.css'


export const ReusableSliderProduct = ({ item }) => {
    return (
        <>
            {/* {relatedProducts.map(()=>( */}
            <Card sx={{ maxWidth: 225, marginLeft: '30px', marginRight: '30px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="180"
                        image={item.images}
                        alt={item.title}
                    />
                    <CardContent>
                        <Typography className='product-title' gutterBottom variant="h6" component="div">
                           {item.name + " "} <br/>
                           Rating: {item.rating}
                        </Typography>
                        <Typography className="mrp" variant="h4"><CurrencyRupee />{item.price}/-</Typography>
                    </CardContent>
                </CardActionArea>

            </Card>
            {/* ))} */}

        </>
    )
}





