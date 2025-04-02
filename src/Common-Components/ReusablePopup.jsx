import * as React from 'react';
import ReactImageMagnify from 'react-image-magnify';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, TextField, Typography } from '@mui/material';
import { ReusableButton } from './ReusableButton';
import CloseIcon from '@mui/icons-material/Close';
import './ReusablePopup.css'
import loginSignUpImage from '../assets/login-signup-vector.png'


export default function ReusablePopup() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(true);
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
                maxWidth="md"
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <IconButton
                    onClick={handleClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>

                <div className='dialog-box-container'>

                    <div className='login-signup-description'>
                        <DialogTitle sx={{ color: '#fff', fontSize: '35px', fontWeight: 700 }} >
                            {isLoggedIn ? ("Login") : ("Looks like you're new here!")}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText sx={{ color: '#fff' }}>
                                {isLoggedIn ? (<Typography sx={{ fontSize: '18px', fontWeight: 500 }}>Get access to your Orders, <br /> Wishlist and Recommendations</Typography>) : ("Sign up with your mobile number to get started")}
                            </DialogContentText>
                        </DialogContent>
                        <div className={isLoggedIn ? 'login-media-container' : 'signup-media-container'}>
                            <img className='login-sighnup-media' src={loginSignUpImage}></img>
                        </div>
                    </div>

                    <div className='input-field-box'>
                        <TextField
                            // autoFocus
                            required
                            // margin="dense"
                            // id="name"
                            name="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                        <Typography sx={{ fontSize: '12px' }} variant='captions'>By continuing, you agree to Flipkart's <b style={{ color: '#16678e' }}> Terms of Use </b> and <b style={{ color: '#16678e' }}>Privacy Policy</b>.</Typography>

                        <div className='button-container'>
                            <ReusableButton className="request-otp-button" variant="contained" value={isLoggedIn ? "Request OTP" : "CONTINUE"} />
                            <ReusableButton className={isLoggedIn ? "create-an-account-button" : "create-an-account-button-sign"} variant={isLoggedIn ? "text" : "contained"} value={isLoggedIn ? "New to Our Website? Create an account" : "Existing User? Log in"} />
                        </div>

                    </div>
                </div>

            </Dialog>
        </React.Fragment>
    );
}
