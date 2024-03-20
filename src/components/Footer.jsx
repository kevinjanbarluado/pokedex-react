import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
    return (
        <Box component="footer" sx={{ mt: 'auto', bgcolor: 'background.paper', p: 2 }}>
            <Typography variant="body2" color="text.secondary" align="center">
                distro.io - Kevin Jan Barluado
            </Typography>
        </Box>
    );
}

export default Footer;
