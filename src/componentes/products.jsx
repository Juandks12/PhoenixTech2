import { Box, Typography } from '@mui/material';
import { ProductCard } from './productcard';

import headimg from '../img/logo.jpg';

const products = [
  { name: 'Laptop Lenovo', price: 3599990, image: headimg },
  { name: 'Laptop MSI Gamer', price: 4219990, image: headimg },
  { name: 'Headset VSG Enigma', price: 289990, image: headimg },
  { name: 'Headset VSG Gemini', price: 139990, image: headimg },
  { name: 'Teclado RGB VSG', price: 99990, image: headimg },
];

export const Products = () => {
  return (
    <Box sx={{ px: 4, py: 5 }}>
      <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
        Productos Destacados
      </Typography>

      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': { height: 8 },
          '&::-webkit-scrollbar-thumb': { background: '#888', borderRadius: 4 },
          '&::-webkit-scrollbar-thumb:hover': { background: '#555' },
        }}
      >
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </Box>
    </Box>
  );
};
