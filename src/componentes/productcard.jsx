import { Card, CardMedia, CardContent, Typography } from '@mui/material';

export const ProductCard = ({ name, price, image }) => {
  return (
    <Card sx={{ width: 200, m: 1, flexShrink: 0 }}>
      <CardMedia component="img" height="140" image={image} alt={name} />
      <CardContent>
        <Typography variant="subtitle1">{name}</Typography>
        <Typography variant="h6" color="primary">${price.toLocaleString()}</Typography>
      </CardContent>
    </Card>
  );
};
