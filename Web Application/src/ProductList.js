import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';
import { fetchProducts } from '../api';

const ProductList = ({ filters, sort, page }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts(filters, sort, page);
      setProducts(data);
    };
    loadProducts();
  }, [filters, sort, page]);

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
