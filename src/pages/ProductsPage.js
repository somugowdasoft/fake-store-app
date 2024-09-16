// src/pages/ProductsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const ProductsPage = ({ cartItems, addToCart, removeFromCart }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      });
  }, []);


  if (isLoading) {
    return <div className="text-center p-10">Loading products...</div>;
  }


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} cartItems={cartItems}  removeFromCart={removeFromCart} />
      ))}
    </div>
  );
};

export default ProductsPage;
