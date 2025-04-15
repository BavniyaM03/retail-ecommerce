import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import './ReusableProductList.css'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { showProductDetails } from '../../../Redux/productSlice';

export const ReusableProductList = () => {
    const routeParam = useParams();
    const dispatch = useDispatch();
    const category = routeParam.category;
    let product = useSelector((state) => state.products[category])
    const [productArray, setProductArray] = useState(product);
    const checked = useSelector((state) => state.products.checked)
    const filterSelections = useSelector((state) => state.products.filterSelections)
    console.log(18, filterSelections);
    // useEffect(() => {
    //     // switch (key) {
    //     //     case value:

    //     //         break;

    //     //     default:
    //     //         break; 
    //     // }
    //     if (checked === true) {
    //         let payOnDeliveryProducts = product.filter((item) => item.pay_on_delivery === true);
    //         setProductArray(payOnDeliveryProducts);
    //     }
    //     else {
    //         setProductArray(product);
    //     }

    // }, [checked])
    // useEffect(() => {
    //     switch (filterSelections.low_to_high || filterSelections.high_to_low || filterSelections.pay_on_delivery || !filterSelections.pay_on_delivery || filterSelections.discount === 10) {
    //         case filterSelections.low_to_high:
    //             if (filterSelections.low_to_high === true) {
    //                 let lowToHighPrice = [...product].sort((a, b) => a.price - b.price)
    //                 setProductArray(lowToHighPrice);
    //             }
    //             break;
    //         case filterSelections.high_to_low:
    //             if (filterSelections.high_to_low === true) {
    //                 let highToLowPrice = [...product].sort((a, b) => b.price - a.price)
    //                 setProductArray(highToLowPrice);
    //             }
    //             break;
    //         case filterSelections.pay_on_delivery:
    //             if (filterSelections.pay_on_delivery === true) {
    //                 console.log(filterSelections.pay_on_delivery)
    //                 let payOnDeliveryProducts = product.filter((item) => item.cashOnDelivery ? item.cashOnDelivery : item.pay_on_delivery === true);
    //                 setProductArray(payOnDeliveryProducts);
    //             }
    //             break;
    //         case filterSelections.pay_on_delivery === false: {
    //             setProductArray(product);
    //         }
    //             break;
    //         case filterSelections.discount:
    //             let showProductsBasisOnDiscount = product.filter((item) => item.discount >= filterSelections.discount);
    //             console.log(showProductsBasisOnDiscount);
    //     }
    //     console.log(filterSelections.discount);
    // }, [filterSelections])

    useEffect(() => {
        let updatedProducts = [...product];

        if (filterSelections.pay_on_delivery === true) {
            updatedProducts = updatedProducts.filter(
                (item) => item.cashOnDelivery || item.pay_on_delivery === true
            );
        }

        if (filterSelections.discount !== null) {

            updatedProducts = updatedProducts.filter(
                (item) => item.discount > filterSelections.discount
            );
            // console.log(85555555, filterSelections.discount);
            console.log(updatedProducts);
        }

        if (filterSelections.low_to_high) {
            updatedProducts.sort((a, b) => a.price - b.price);
        } else if (filterSelections.high_to_low) {
            updatedProducts.sort((a, b) => b.price - a.price);
        }

        if (filterSelections.stock) {
            updatedProducts = updatedProducts.filter(
                (item) => item.stock > 0)
                console.log(updatedProducts);
        }else{
            setProductArray(product);
        }

        if(filterSelections.rating === true){
            console.log(102, filterSelections.rating_value)
            updatedProducts = updatedProducts.filter((item)=>item.rating >= filterSelections.rating_value)
            console.log(updatedProducts);
        }else{
            setProductArray(product);
        }

        if(filterSelections.range){
            console.log(filterSelections.range)
            updatedProducts = updatedProducts.filter((item)=>item.price >= filterSelections.range[0] && item.price <= filterSelections.range[1])
            console.log(updatedProducts);
        }



        setProductArray(updatedProducts);

        console.log("Active filters:", filterSelections);
    }, [filterSelections, product]);


    return (
        <>

            <div className="card-item-container">
                {productArray.map((item, index) => (
                    <Card key={index} sx={{ width: 280, height: 350 }}>
                        <NavLink to={`/product/${item.id}`} onClick={()=>dispatch(showProductDetails(item))}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={item.images ? item.images : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019"}
                            alt="green iguana"
                            sx={{ objectFit: 'contain' }}
                        />
                        </NavLink>
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




