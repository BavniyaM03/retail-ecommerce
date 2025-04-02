import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { CurrencyRupee } from '@mui/icons-material';
import './ReusableSliderProduct.css'

export const ReusableSliderProduct = () => {
    return (
        <>
            <Card sx={{ maxWidth: 225, marginLeft : '30px', marginRight: '30px'}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="180"
                        image="https://rukminim2.flixcart.com/image/312/312/xif0q/smartwatch/i/4/b/-original-imah2thy4cphhcbe.jpeg?q=70&crop=false"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography className='product-title' gutterBottom variant="h6" component="div">
                        Noise Colorfit Icon 2 1.8'' Display with Bluetooth Calling, Smartwatch  (Blue Strap, Regular)
                        </Typography>
                        <Typography className="mrp" variant="h4"><CurrencyRupee />500/-</Typography>
                    </CardContent>
                </CardActionArea>
               
            </Card>
        </>
    )
}





