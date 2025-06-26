import { AppBar, Toolbar, Typography, IconButton, Box, Stack, Link } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import headimg from '../img/logo.jpg';

export const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#0f0e17' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                
                {/* Enlaces de navegación */}
                <Stack direction="row" spacing={3} alignItems="center">
                    <Link href="#" underline="none">
                        <Typography variant="h6" color="white">Inicio</Typography>
                    </Link>
                    <Link href="#" underline="none">
                        <Typography variant="h6" color="white">Categorías</Typography>
                    </Link>
                    <Link href="#" underline="none">
                        <Typography variant="h6" color="white">Contacto</Typography>
                    </Link>
                </Stack>

                {/* Logo centrado */}
                <Box display="flex" justifyContent="center" flexGrow={1}>
                    <img src={headimg} alt="Logo" style={{ height: 120 }} />
                </Box>

                {/* Íconos */}
                <Box display="flex" gap={1}>
                    <IconButton color="inherit">
                        <ShoppingCartIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <AccountCircleIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
