import { Box, Typography } from '@mui/material';

export const Footer = () => {
    return (
        <Box component="footer" sx={{ backgroundColor: '#ff8906', textAlign: 'center', py: 2 }}>
            <Typography variant="body1" color="black">
                Phoenix Tech 2025
            </Typography>
        </Box>
    );
};
