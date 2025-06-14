import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import headimg from '../img/logo.jpg';

export const Navbar = () => {
    return (
        <AppBar position="static" className="main-header" sx={{ backgroundColor: '#0f0e17' }}>
            <Toolbar className="toolbar">
              
                {/* Navegación izquierda */}
                <Box className="nav-links">
                    <Typography variant="h6" component="a" href="#" className="nav-links">
                        Inicio
                    </Typography>
                    <Typography variant="h6" component="a" href="#" className="nav-links">
                        Categorías
                    </Typography>
                    <Typography variant="h6" component="a" href="#" className="nav-links">
                        Contacto
                    </Typography>
                </Box>

                {/* Logo centrado */}
                <Box className="logo-container">
                    <img src={headimg} alt="Logo" className="logo" />
                </Box>

                {/* Íconos a la derecha */}
                <Box className="icon-container">
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