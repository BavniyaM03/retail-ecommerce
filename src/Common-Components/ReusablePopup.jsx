import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FilledInput, FormControl, IconButton, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import { ReusableButton } from './ReusableButton';
import CloseIcon from '@mui/icons-material/Close';
import './ReusablePopup.css'
import loginSignUpImage from '../assets/login-signup-vector.png'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ReusableTextField } from './ReusableTextField';


export default function ReusablePopup() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open responsive dialog
            </Button>
            <div className='popup-container'>
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





                            {isLoggedIn ? (<div className='input-field-box'>

                                <ReusableTextField
                                    name="email"
                                    label="Email Address"
                                    type="email"
                                    variant="standard" />

                                <Typography sx={{ fontSize: '12px' }} variant='captions'>By continuing, you agree to Flipkart's <b style={{ color: '#16678e' }}> Terms of Use </b> and <b style={{ color: '#16678e' }}>Privacy Policy</b>.</Typography>

                                <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                                    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                                    <FilledInput
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label={
                                                        showPassword ? 'hide the password' : 'display the password'
                                                    }
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </div>) : (
                                <div>
                                    <ReusableTextField
                                        name="email"
                                        label="Email Address"
                                        type="email"
                                        variant="standard" />

                                    <Typography sx={{ fontSize: '12px' }} variant='captions'>By continuing, you agree to Flipkart's <b style={{ color: '#16678e' }}> Terms of Use </b> and <b style={{ color: '#16678e' }}>Privacy Policy</b>.</Typography>

                                    <ReusableTextField
                                        name="firstName"
                                        label="First Name"
                                        type="text"
                                        variant="standard" />

                                    <ReusableTextField
                                        name="lastName"
                                        label="Last Name"
                                        type="text"
                                        variant="standard" />

                                    <FormControl sx={{ m: 1, width: '25ch' }} variant="filled" fullWidth>
                                        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                                        <FilledInput
                                            type={showPassword ? 'text' : 'password'}
                                            fullWidth
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label={
                                                            showPassword ? 'hide the password' : 'display the password'
                                                        }
                                                        onClick={handleClickShowPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>

                                </div>)}

                            <div className='button-container'>
                                <ReusableButton className="request-otp-button" variant="contained" value={isLoggedIn ? "Request OTP" : "CONTINUE"} />
                                <ReusableButton className={isLoggedIn ? "create-an-account-button" : "create-an-account-button-sign"} variant={isLoggedIn ? "text" : "contained"} value={isLoggedIn ? "New to Our Website? Create an account" : "Existing User? Log in"} />
                            </div>

                        </div>
                    </div>

                </Dialog>
            </div>
        </React.Fragment>
    );
}
