import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SkeletaProduct from '../SkeletaProduct/SkeletaProduct';

const WomanComp = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    fetch('http://localhost:3000/products?Kategoria=women')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const sortProducts = (option) => {
    let sortedProducts = [...products];
    if (option === 'price-low-high') {
      sortedProducts.sort((a, b) => a.cmimi - b.cmimi);
    } else if (option === 'price-high-low') {
      sortedProducts.sort((a, b) => b.cmimi - a.cmimi);
    } else if (option === 'reviews-high-low') {
      sortedProducts.sort((a, b) => b.reviews - a.reviews);
    }
    setProducts(sortedProducts);
  };

  useEffect(() => {
    sortProducts(sortOption);
  }, [sortOption]);

  const addToCart = (product) => {
    fetch('http://localhost:3000/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Product added to cart:', data);
    })
    .catch(error => {
      console.error('Error adding product to cart:', error);
    });
  };
  const viewProductDetails = (productId) => {
    navigate(`/products/${productId}`);
  };

  

  return (
    <div>
      <h1>Women's Products</h1>
      <select onChange={e => setSortOption(e.target.value)}>
        <option value="default">Default</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="reviews-high-low">Reviews: High to Low</option>
      </select>
      <div className="product-list">
        {products.map(product => (
          <SkeletaProduct
          key={product.id}
          emriProduktit={product.emriProduktit}
          description={product.description}
          cmimi={product.cmimi}
          reviews={product.reviews}
            onAddToCart={addToCart}
            image={product.image}
            viewproduct={() => viewProductDetails(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default WomanComp;
