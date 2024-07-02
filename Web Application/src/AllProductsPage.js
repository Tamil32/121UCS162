import React, { useState } from 'react';
import { Container, Pagination, Select, MenuItem } from '@mui/material';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';

const AllProductsPage = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <Container>
      <Filter filters={filters} setFilters={setFilters} />
      <Select value={sort} onChange={handleSortChange} fullWidth margin="normal">
        <MenuItem value=""><em>None</em></MenuItem>
        <MenuItem value="price">Price</MenuItem>
        <MenuItem value="rating">Rating</MenuItem>
        <MenuItem value="discount">Discount</MenuItem>
      </Select>
      <ProductList filters={filters} sort={sort} page={page} />
      <Pagination
        count={10} // Adjust based on total number of pages
        page={page}
        onChange={(e, value) => setPage(value)}
      />
    </Container>
  );
};

export default AllProductsPage;

