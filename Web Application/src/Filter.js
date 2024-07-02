import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';

const Filter = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <FormControl fullWidth margin="normal">
        <InputLabel>Category</InputLabel>
        <Select
          value={filters.category || ''}
          onChange={handleChange}
          name="category"
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="Electronics">Electronics</MenuItem>
          <MenuItem value="Clothing">Clothing</MenuItem>
          {/* Add more categories as needed */}
        </Select>
      </FormControl>
      <TextField
        label="Company"
        fullWidth
        margin="normal"
        name="company"
        value={filters.company || ''}
        onChange={handleChange}
      />
      <TextField
        label="Price Range"
        fullWidth
        margin="normal"
        name="priceRange"
        value={filters.priceRange || ''}
        onChange={handleChange}
      />
      <TextField
        label="Rating"
        fullWidth
        margin="normal"
        name="rating"
        value={filters.rating || ''}
        onChange={handleChange}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Availability</InputLabel>
        <Select
          value={filters.availability || ''}
          onChange={handleChange}
          name="availability"
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="In Stock">In Stock</MenuItem>
          <MenuItem value="Out of Stock">Out of Stock</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;

