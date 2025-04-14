import React from 'react';
import { FilledInput, FormControl, IconButton, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const ReusablePassword = ({ value, onChange, type, onClick, showPassword, helperText}) => {
    return (
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled" helperText={helperText}>
            <InputLabel>Password</InputLabel>
            <FilledInput
                name="password"
                value={value}
                onChange={onChange}
                type={type}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label={
                                showPassword ? 'hide the password' : 'display the password'
                            }
                            onClick={onClick}
                            edge="end"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            <Typography variant='caption' >{helperText}</Typography>
        </FormControl>
    )
}