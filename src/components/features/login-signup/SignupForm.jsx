import React from 'react';
import { Typography } from '@mui/material';
import { ReusableTextField } from '../../common/ui/ReusableTextField';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginSignupFormValues } from '../../../Redux/authSlice';
import { ReusablePassword } from './ReusablePassword';
import './LoginSignupForm.css'

export const SignupForm = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const userFormValues = useSelector((state) => state.authSlice.userFormValues);
    const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn)

    const dispatch = useDispatch();
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleUserSignupData = (e) => {
        e.preventDefault;
        const { name, value } = e.target;
        dispatch(setLoginSignupFormValues({ name: name, value: value }))
    }

    return (
        <>
            {!isLoggedIn && <div>
                <ReusableTextField
                    name="email"
                    label="Email Address"
                    type="email"
                    variant="standard"
                    value={userFormValues.email}
                    onChange={(e) => handleUserSignupData(e)}
                />

                <Typography sx={{ fontSize: '12px' }} variant='captions'>By continuing, you agree to Flipkart's <b style={{ color: '#16678e' }}> Terms of Use </b> and <b style={{ color: '#16678e' }}>Privacy Policy</b>.</Typography>

                <ReusableTextField
                    name="firstName"
                    label="First Name"
                    type="text"
                    variant="standard"
                    value={userFormValues.firstName}
                    onChange={(e) => handleUserSignupData(e)} />

                <ReusableTextField
                    name="lastName"
                    label="Last Name"
                    type="text"
                    variant="standard"
                    value={userFormValues.lastName}
                    onChange={(e) => handleUserSignupData(e)} />


                <ReusablePassword
                    value={userFormValues.password}
                    onChange={(e) => handleUserSignupData(e)}
                    type={showPassword ? 'text' : 'password'}
                    onClick={handleClickShowPassword} showPassword={showPassword} />

            </div>}
        </>
    )
}