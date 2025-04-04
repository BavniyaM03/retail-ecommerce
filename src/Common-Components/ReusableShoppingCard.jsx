import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Typography } from '@mui/material';
import { CurrencyRupeeOutlined } from '@mui/icons-material';

import './ReusableShoppingCard.css';
import { books } from '../Data/books-data';

export const ReusableShoppingCard = () => {
    return (
        <div className="shopping-cart-item-container">
            <div className='shopping-cart'>
                <div className="shopping-cart-title">
                    <Typography variant='h4'>Shopping Cart</Typography>
                </div>

                {books.map((item, index) => (
                    <div key={index} className="cart-items">
                        <div className="cart-item-image">
                            <img src='https://m.media-amazon.com/images/I/61+8OlSpToL._SX522_.jpg' alt='book' />
                        </div>

                        <div className="cart-item-details">
                            <Typography variant='h5'>{item.title}</Typography>
                            <Typography variant='h5'>
                                <CurrencyRupeeOutlined /> {item.price}
                            </Typography>

                            <div className='add-to-cart'>
                                <section><RemoveCircleOutlineOutlinedIcon /></section>
                                <section><Typography variant='h5'>2</Typography></section>
                                <section><ControlPointOutlinedIcon /></section>
                            </div>

                            <div className='cart-item-actions'>
                                <div className='cart-action-btn'>
                                    <DeleteOutlineOutlinedIcon fontSize='small' />
                                    <Typography>Remove</Typography>
                                </div>
                                <div className='cart-action-btn'>
                                    <FavoriteBorderOutlinedIcon fontSize='small' />
                                    <Typography>Move to Wishlist</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='cart-item-price-box'>
                <Typography variant='h6' className="price-title">PRICE DETAILS</Typography>

                <div className="price-row">
                    <Typography>Price (2 items)</Typography>
                    <Typography><CurrencyRupeeOutlined fontSize='small' /> 300</Typography>
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
                    <Typography variant='h6'><CurrencyRupeeOutlined fontSize='small' /> 290</Typography>
                </div>

                <button className="proceed-btn">Proceed to Buy</button>
            </div>
        </div>
    );
};
