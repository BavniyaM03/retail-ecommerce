import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReusableTypography from '../../common/ui/ReusableTypography';
import ReusableDropDown from '../../common/ui/ReusableDropDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { SearchIconWrapper } from './Style';
import { Search } from './Style';
import { StyledInputBase } from './Style';
import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router";

import { ReusableButton } from '../../common/ui/ReusableButton';
import { loginPopupVisible } from '../../../Redux/authSlice';
import { findProduct } from '../../../Redux/productSlice';



export default function Header() {
    const cart = useSelector((state) => state.cartItem.items);
    const wishlist = useSelector((state) => state.wishlist.wishlist);
    const searchData = useSelector((state)=>state.products.searchQuery)
    const dispatch = useDispatch();

    const handleDisplayLoginPage = (value) => {
        dispatch(loginPopupVisible(value))
    }
    return (
        <Box sx={{ flexGrow: 1 }} className="header-container karla-font" >
            <AppBar position="fixed" sx={{ backgroundColor: '#16678e' }}>
                <Toolbar>
                    <NavLink className="hyperlink" to="/" style={{ color: '#fff' }}>
                        <ReusableTypography />
                    </NavLink>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {/* <ReusableDropDown /> */}
                    </Box>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            value={searchData}
                            onChange={(e)=>dispatch(findProduct(e.target.value))}
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                        {/* <ReusableDropDown value={['Login', 'Sign Up']} onChange={()=>dispatch(loginPopupVisible())}  /> */}
                        <ReusableButton value="Login" onClick={() => handleDisplayLoginPage(true)} />

                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <NavLink className="hyperlink" to="/wishlist">
                                <Badge badgeContent={wishlist.length} color="error">
                                    <FavoriteBorderIcon />
                                </Badge>
                            </NavLink>
                        </IconButton>

                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            //   aria-controls={menuId}
                            aria-haspopup="true"

                            color="inherit"
                        > <NavLink className="hyperlink" to="/cartitem">
                                <Badge badgeContent={cart.length} color="error">
                                    <ShoppingCartOutlinedIcon />
                                </Badge>
                            </NavLink>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
