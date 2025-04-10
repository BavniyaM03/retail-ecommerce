import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FilledInput, FormControl, IconButton, InputAdornment, InputLabel, Typography } from '@mui/material';
import { ReusableButton } from '../../common/ui/ReusableButton';
import CloseIcon from '@mui/icons-material/Close';
import './LoginSignupForm.css'
import loginSignUpImage from '../../../assets/login-signup-vector.png'
import { SignLanguage, Visibility, VisibilityOff } from '@mui/icons-material';
import { ReusableTextField } from '../../common/ui/ReusableTextField';
import { useDispatch, useSelector } from 'react-redux';
import { closeLoginPage, handleAuthorizedUserLogin, handleLoginData, handleSignUpData, handleStoreDataInTheSessionStorage, openSignUpPage } from '../../../Redux/authSlice';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';


export default function LoginSignupForm() {
    const [showPassword, setShowPassword] = React.useState(false);
    const open = useSelector((state) => state.authSlice.open)
    const signUpDetails = useSelector((state) => state.authSlice.signup);
    const loginDetails = useSelector((state) => state.authSlice.login);
    const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn)

    // const [user, setUser] = React.useState(signUpDetails);

    console.log(signUpDetails);
    const dispatch = useDispatch();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleUserSignupData = (e) => {
        e.preventDefault;
        const { name, value } = e.target;
        dispatch(handleSignUpData({ name: name, value: value }))
    }

    const handleUserLoginData = (e) => {
        e.preventDefault;
        const { name, value } = e.target;
        dispatch(handleLoginData({ name: name, value: value }))
    }

    const handlerLoginSignup = () => {
        if (isLoggedIn) {
            dispatch(handleAuthorizedUserLogin())
        } else {
            dispatch(handleStoreDataInTheSessionStorage())
        }
    }

    return (
        <React.Fragment>
            <div className='popup-container'>
                <Dialog
                    maxWidth="md"
                    open={open}
                    onClose={() => dispatch(closeLoginPage())}
                    fullWidth
                >
                    <IconButton
                        onClick={() => dispatch(closeLoginPage())}
                        sx={(theme) => ({
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: theme.palette.grey[500],
                        })}
                    >
                        <CloseIcon sx={{ cursor: 'pointer' }} />
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
                            <LoginForm/>
                            <SignupForm/>

                            {/* {isLoggedIn ? (<div className='input-field-box'>
                                <ReusableTextField
                                    name="email"
                                    label="Email Address"
                                    type="email"
                                    variant="standard"
                                    value={loginDetails.email}
                                    onChange={(e) => handleUserLoginData(e)} />

                                <Typography sx={{ fontSize: '12px' }} variant='captions'>By continuing, you agree to Flipkart's <b style={{ color: '#16678e' }}> Terms of Use </b> and <b style={{ color: '#16678e' }}>Privacy Policy</b>.</Typography>

                                <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                                    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                                    <FilledInput
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={loginDetails.password}
                                        onChange={(e) => handleUserLoginData(e)}
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
                            </div>) : ( */}
                                {/* <div>
                                    <ReusableTextField
                                        name="email"
                                        label="Email Address"
                                        type="email"
                                        variant="standard"
                                        value={signUpDetails.email}
                                        onChange={(e) => handleUserSignupData(e)}
                                    />

                                    <Typography sx={{ fontSize: '12px' }} variant='captions'>By continuing, you agree to Flipkart's <b style={{ color: '#16678e' }}> Terms of Use </b> and <b style={{ color: '#16678e' }}>Privacy Policy</b>.</Typography>

                                    <ReusableTextField
                                        name="firstName"
                                        label="First Name"
                                        type="text"
                                        variant="standard"
                                        value={signUpDetails.firstName}
                                        onChange={(e) => handleUserSignupData(e)} />

                                    <ReusableTextField
                                        name="lastName"
                                        label="Last Name"
                                        type="text"
                                        variant="standard"
                                        value={signUpDetails.lastName}
                                        onChange={(e) => handleUserSignupData(e)} />

                                    <FormControl sx={{ m: 1, width: '25ch' }} variant="filled" fullWidth>
                                        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                                        <FilledInput
                                            name="password"
                                            value={signUpDetails.password}
                                            pattern="(?=(.*[a-z]){3,}) (?=(.*[A-Z]){2,}) (?=(.*[0-9]){2,}) (?=(.*[!@#$%^&*()\-__+.]){1,}) {8,}"
                                            onChange={(e) => handleUserSignupData(e)}
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

                                </div>)} */}

                            {/* handleAuthorizedUserLogin */}

                            <div className='button-container'>
                                <ReusableButton onClick={() => handlerLoginSignup()} className="request-otp-button" variant="contained" value={isLoggedIn ? "Request OTP" : "CONTINUE"} />
                                <ReusableButton onClick={() => dispatch(openSignUpPage())} className={isLoggedIn ? "create-an-account-button" : "create-an-account-button-sign"} variant={isLoggedIn ? "text" : "contained"} value={isLoggedIn ? "New to Our Website? Create an account" : "Existing User? Log in"} />
                            </div>

                        </div>
                    </div>

                </Dialog>
            </div>
        </React.Fragment>
    );
}
