import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReusableTypography from '../../Common-Components/ReusableTypography';
import ReusableDropDown from '../../Common-Components/ReusableDropDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { SearchIconWrapper } from './Style';
import { Search } from './Style';
import { StyledInputBase } from './Style';
import './Header.css'

export default function Header() {

    return (
        <Box sx={{ flexGrow: 1}} className="header-container karla-font" >
            <AppBar position="fixed" sx={{ backgroundColor: '#16678e' }}>
                <Toolbar>

                    <ReusableTypography />

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <ReusableDropDown />
                    </Box>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <ReusableDropDown />
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <FavoriteBorderIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            //   aria-controls={menuId}
                            aria-haspopup="true"

                            color="inherit"
                        >
                            <ShoppingCartOutlinedIcon />
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
