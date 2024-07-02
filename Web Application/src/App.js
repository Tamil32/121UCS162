import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AllProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
    </Routes>
  </Router>
);

export default App;

