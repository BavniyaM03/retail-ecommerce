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
import { loginPopupVisible, handleAuthorizedUserLogin, setLoginSignupFormValues, handleSignUpData, handleStoreDataInTheSessionStorage, openSignUpPage } from '../../../Redux/authSlice';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';


export default function LoginSignupForm() {
    const [showPassword, setShowPassword] = React.useState(false);
    const open = useSelector((state) => state.authSlice.open)
    const signUpDetails = useSelector((state) => state.authSlice.signup);
    const loginDetails = useSelector((state) => state.authSlice.login);
    const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn)

    // const [user, setUser] = React.useState(signUpDetails);

    // console.log(signUpDetails);
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
        dispatch(setLoginSignupFormValues({ name: name, value: value }))
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
                    onClose={() => dispatch(loginPopupVisible())}
                    fullWidth
                >
                    <IconButton
                        onClick={() => dispatch(loginPopupVisible())}
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
