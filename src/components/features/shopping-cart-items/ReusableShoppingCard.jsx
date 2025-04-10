import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Typography } from '@mui/material';
import { CurrencyRupeeOutlined } from '@mui/icons-material';
import './ReusableShoppingCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, moveToWishlist, removeCartItem, removeToCart } from '../../../Redux/cartSlice';
import { addToWishlist } from '../../../Redux/wishlistSlice';


export const ReusableShoppingCard = () => {
    const cart = useSelector((state) => state.cartItem.items);
    const dispatch = useDispatch();
    console.log(14, cart);


    const priceArray = cart.map((item) => item.price * item.quantity);
    console.log(19, priceArray);
    const getSum = (total, num) => {
        return total + num;
    }
    let price = priceArray.reduce(getSum);
    price = price.toFixed(2);
    const amountAfterDiscountAndDeliveryCharges = price - 50 + 40;
    const totalAmount = amountAfterDiscountAndDeliveryCharges.toFixed(2);

    const handleMoveToWishlist = (item) =>{
        dispatch(moveToWishlist(item))
        dispatch(addToWishlist(item))
    }

    return (
        <div className="shopping-cart-item-container">
            <div className='shopping-cart'>
                <div className="shopping-cart-title">
                    <Typography variant='h4'>Shopping Cart</Typography>
                </div>

                {cart.map((item, index) => (
                    <div key={index} className="cart-items">
                        <div className="cart-item-image">
                            <img src={item.images ? item.images : item.cover_image} alt='book' />
                        </div>

                        <div className="cart-item-details">
                            <Typography variant='h5'>{item.name ? item.name : item.title}</Typography>
                            <Typography variant='h5'>
                                <CurrencyRupeeOutlined /> {item.price}
                            </Typography>

                            <div className='add-to-cart'>
                                <section onClick={()=>dispatch(removeToCart(item))}><RemoveCircleOutlineOutlinedIcon /></section>
                                <section><Typography variant='h5'>{item.quantity}</Typography></section>
                                <section onClick={()=>dispatch(addToCart(item))}><ControlPointOutlinedIcon /></section>
                            </div>

                            <div className='cart-item-actions' >
                                <div className='cart-action-btn' onClick={() => dispatch(removeCartItem(item))} >
                                    <DeleteOutlineOutlinedIcon fontSize='small' />
                                    <Typography>Remove</Typography>
                                </div>
                                <div className='cart-action-btn'>
                                    <FavoriteBorderOutlinedIcon fontSize='small' />
                                    <Typography onClick={()=>handleMoveToWishlist(item)}>Move to Wishlist</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='cart-item-price-box'>
                <Typography variant='h6' className="price-title">PRICE DETAILS</Typography>

                <div className="price-row">
                    <Typography>Price ({cart.length} items)</Typography>
                    <Typography><CurrencyRupeeOutlined fontSize='small' /> {price}</Typography>
                </div>

                <div className="price-row">
                    <Typography>Discount</Typography>
                    <Typography className="green-text">-<CurrencyRupeeOutlined fontSize='small' /> 50</Typography>
                </div>

                <div className="price-row">
                    <Typography>Delivery Charges</Typography>
                    <Typography><CurrencyRupeeOutlined fontSize='small' /> 40</Typography>
                </div>

                <div className="price-total-row">
                    <Typography variant='h6'>Total Amount</Typography>
                    <Typography variant='h6'><CurrencyRupeeOutlined fontSize='small' /> {totalAmount}</Typography>
                </div>

                <button className="proceed-btn">Proceed to Buy</button>
            </div>

        </div>
    );
};
