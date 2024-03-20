import React from 'react';
import { AppBar, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import logo from '../assets/pokemon_logo.webp';

function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppBar position="static" sx={{ py: 1, px: 5 }}>
            <Toolbar sx={isMobile ? { justifyContent: 'center' } : null}>
                <img src={logo} width={150} alt="Pokemon" />
                <Typography variant="h6" sx={{ marginLeft: isMobile ? 0 : 2 }}>
                    Pokédex
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
