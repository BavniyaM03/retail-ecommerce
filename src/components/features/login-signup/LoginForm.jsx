import * as React from 'react';
import { Typography } from '@mui/material';
import './LoginSignupForm.css'
import { ReusableTextField } from '../../common/ui/ReusableTextField';
import { useDispatch, useSelector } from 'react-redux';
import { handleLoginData } from '../../../Redux/authSlice';
import { ReusablePassword } from './ReusablePassword';

export const LoginForm = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const signUpDetails = useSelector((state) => state.authSlice.signup);
    const loginDetails = useSelector((state) => state.authSlice.login);
    const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn)

    console.log(signUpDetails);
    const dispatch = useDispatch();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleUserLoginData = (e) => {
        e.preventDefault;
        const { name, value } = e.target;
        dispatch(handleLoginData({ name: name, value: value }))
    }

    return (
        <>
            {isLoggedIn &&

                <div className='input-field-box'>

                    <ReusableTextField
                        name="email"
                        label="Email Address"
                        type="email"
                        variant="standard"
                        value={loginDetails.email}
                        onChange={(e) => handleUserLoginData(e)} />

                    <Typography
                        sx={{ fontSize: '12px' }}
                        variant='captions'>By continuing, you agree to Flipkart's
                        <b style={{ color: '#16678e' }}> Terms of Use </b> and
                        <b style={{ color: '#16678e' }}>Privacy Policy</b>.
                    </Typography>

                    <ReusablePassword
                        value={loginDetails.password}
                        onChange={(e) => handleUserLoginData(e)}
                        type={showPassword ? 'text' : 'password'}
                        onClick={handleClickShowPassword}
                        showPassword={showPassword} />

                </div>
            }
        </>
    )
}