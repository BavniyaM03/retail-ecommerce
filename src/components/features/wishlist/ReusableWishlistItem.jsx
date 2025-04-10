import React from 'react';
import './ReusableWishlistItem.css';
import { Typography } from '@mui/material';
import { CurrencyRupeeOutlined } from '@mui/icons-material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { ReusableButton } from '../../common/ui/ReusableButton'
import { useDispatch, useSelector } from 'react-redux';
import { removeToWishlist } from '../../../Redux/wishlistSlice';
import { addToCart } from '../../../Redux/cartSlice';



export const ReusableWishlistItem = () => {
    const wishlist = useSelector((state) => state.wishlist.wishlist);
    const dispatch = useDispatch();
    console.log(wishlist)

    const handleAddToCartAndRemoveFromWishlist = (item) => {
        dispatch(addToCart(item)); 
        dispatch(removeToWishlist(item));
    }

    return (
        <>
            <div className="shopping-cart-item-container">
                <div className='shopping-cart'>
                    <div className="shopping-cart-title">
                        <Typography variant='h4'>My Wishlist ({wishlist.length})</Typography>
                    </div>

                    {wishlist.map((item, index) => (
                        <div key={index} className="cart-items">
                            <div className="cart-item-image">
                                <img src={item.images? item.images : item.cover_image} alt='book' />
                            </div>

                            <div className="cart-item-details">
                                <Typography variant='h5'>{item.name ? item.name : item.title}</Typography>
                                <Typography variant='h5'>
                                    <CurrencyRupeeOutlined /> {item.price}
                                </Typography>

                                <div className='add-to-cart-button-wishlist'>
                                    <ReusableButton onClick={() => handleAddToCartAndRemoveFromWishlist(item)} variant="contained" value="Add to Cart" />
                                </div>

                                <div className='cart-item-actions' onClick={() => dispatch(removeToWishlist(item))} >
                                    <div className='cart-action-btn'>
                                        <DeleteOutlineOutlinedIcon fontSize='small' />
                                        <Typography>Remove</Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </>
    )
}