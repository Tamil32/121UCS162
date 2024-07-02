import React from 'react';
import { Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <Card>
    <CardMedia
      component="img"
      height="140"
      image={product.image}
      alt={product.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Company: {product.company}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Category: {product.category}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Price: ${product.price}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Rating: {product.rating}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Discount: {product.discount}%
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Availability: {product.availability}
      </Typography>
      <Button component={Link} to={`/products/${product.id}`} variant="contained" color="primary">
        View Details
      </Button>
    </CardContent>
  </Card>
);

export default ProductCard;
