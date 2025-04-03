import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IconButton, TextField, Typography } from '@mui/material';
import { ReusableButton } from './ReusableButton';
import CloseIcon from '@mui/icons-material/Close';
import './ReusablePopupProduct.css'
import loginSignUpImage from '../assets/login-signup-vector.png'
import { CurrencyRupee } from '@mui/icons-material';


export default function ReusablePopupProduct() {
    // const [isLoggedIn, setIsLoggedIn] = React.useState(true);
    const [isActive, setIsActive] = React.useState(true);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open responsive dialog
            </Button>
            <Dialog
                maxWidth="lg"
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <IconButton
                    onClick={handleClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        left: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>

                <div className='dialog-box-container'>

                    <div className='product-mainimage-container'>
                        {isActive ? (<img src="https://m.media-amazon.com/images/I/71uz5-vwz1L._SL1500_.jpg"></img>) : (<video controls>
                            <source src="https://d286adtp3hdk00.cloudfront.net/8904245710101_VD.mp4" type="video/mp4"></source>
                        </video>)}
                    </div>

                    <div className='product-small-images'>

                        <div>
                            <ReusableButton className={isActive ? "image-button" : "video-button"} variant="text" value="Image" />
                            <ReusableButton className={isActive ? "video-button" : "image-button"} variant="text" value="Video" />
                        </div>

                        {isActive ? (<div className='small-images-container'>
                            <div>
                                <section><img className='small-view-of-images' src='https://m.media-amazon.com/images/I/71FjLgIQRKL._SL1024_.jpg'></img></section>
                                <section><img className='small-view-of-images' src='https://m.media-amazon.com/images/I/71FjLgIQRKL._SL1024_.jpg'></img></section>
                                <section><img className='small-view-of-images' src='https://m.media-amazon.com/images/I/71FjLgIQRKL._SL1024_.jpg'></img></section>
                            </div>

                            <div>
                                <section><img className='small-view-of-images' src='https://m.media-amazon.com/images/I/71FjLgIQRKL._SL1024_.jpg'></img></section>
                                <section><img className='small-view-of-images' src='https://m.media-amazon.com/images/I/71FjLgIQRKL._SL1024_.jpg'></img></section>
                                <section><img className='small-view-of-images' src='https://m.media-amazon.com/images/I/71FjLgIQRKL._SL1024_.jpg'></img></section>
                            </div>

                            <div>
                                <section><img className='small-view-of-images' src='https://m.media-amazon.com/images/I/71FjLgIQRKL._SL1024_.jpg'></img></section>
                                <section><img className='small-view-of-images' src='https://m.media-amazon.com/images/I/71FjLgIQRKL._SL1024_.jpg'></img></section>
                                <section><img className='small-view-of-images' src='https://m.media-amazon.com/images/I/71FjLgIQRKL._SL1024_.jpg'></img></section>
                            </div>

                        </div>) : (<div className='small-video-container'>
                            <div className='small-video'>
                                <img src='https://d286adtp3hdk00.cloudfront.net/c22bcf66-9756-4a97-8ae2-33eba3794b06/thumbnails/8904245704209_VD_thumb.0000002.jpg'>
                                </img>
                                <div className='video-playing-label'>Now Playing</div>
                            </div>
                            <div className='video-timer'>
                                <Typography>VD </Typography>
                                <Typography>00:11</Typography>
                            </div>
                        </div>)}

                        <div className='popup-product-details-container'>
                            <Typography variant='captions'>
                                Global Grabbers New 25 Centimetre
                                Meditating Sitting Buddha Statue
                                showpiece Idol Home Decor Items for
                                Living Room and Gifts (1, Orange Black)
                            </Typography>
                            <div className='popup-product-mrp'>
                                <Typography>
                                    <CurrencyRupee />
                                </Typography> <Typography>500/-</Typography>
                            </div>

                            <ReusableButton className="add-to-bag" variant="contained" value="Add to Bag" />

                        </div>


                    </div>
                </div>

            </Dialog>
        </React.Fragment>
    );
}
