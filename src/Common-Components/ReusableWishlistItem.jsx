import React from 'react';
import './ReusableWishlistItem.css';
import { Typography} from '@mui/material';
import { CurrencyRupeeOutlined } from '@mui/icons-material';
import { books } from '../Data/books-data';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {ReusableButton} from '../Common-Components/ReusableButton'



export const ReusableWishlistItem = () => {
  return (
    <>
      <div className="shopping-cart-item-container">
            <div className='shopping-cart'>
                <div className="shopping-cart-title">
                    <Typography variant='h4'>My Wishlist (2)</Typography>
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

                            <div className='add-to-cart-button-wishlist'>
                                <ReusableButton variant="contained" value="Add to Cart"/>
                            </div>

                            <div className='cart-item-actions'>
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