import axios from 'axios';

const BASE_URL = 'http://your-backend-api-url.com'; // Replace with your backend URL

export const fetchProducts = async (filters, sort, page) => {
  const response = await axios.get(`${BASE_URL}/products`, {
    params: { ...filters, sort, page },
  });
  return response.data;
};

export const fetchProductDetail = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
};

