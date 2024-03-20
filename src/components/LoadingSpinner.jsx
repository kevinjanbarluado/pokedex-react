
import { Box, CircularProgress } from '@mui/material';

const LoadingSpinner = () => (
    <Box
        sx={{
            minHeight: 350,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <CircularProgress />
    </Box>
);

export default LoadingSpinner