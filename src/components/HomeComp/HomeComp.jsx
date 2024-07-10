import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SkeletaProduct from '../SkeletaProduct/SkeletaProduct';

const HomeComp = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user-info'));

  const [kidsProducts, setKidsProducts] = useState([]);
  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products?Kategoria=kids')
      .then(response => response.json())
      .then(data => setKidsProducts(data.slice(0, 3)));

    fetch('http://localhost:3000/products?Kategoria=men')
      .then(response => response.json())
      .then(data => setMenProducts(data.slice(0, 3)));

    fetch('http://localhost:3000/products?Kategoria=women')
      .then(response => response.json())
      .then(data => setWomenProducts(data.slice(0, 3)));
  }, []);

  const logout = () => {
    localStorage.removeItem('user-info');
    navigate('/login');
  };

  const viewProductDetails = (productId) => {
    navigate(`/products/${productId}`);
  };


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

  return (
    <div id='home'>
      {user ? (
        <div>
          <h1>Welcome, {user.email}</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>You are not logged in</h1>
          <button onClick={() => navigate('/login')}>Login</button>
        </div>
      )}

      <h2>Kids' Products</h2>
      <div className="product-list">
        {kidsProducts.map(product => (
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

      <h2>Men's Products</h2>
      <div className="product-list">
        {menProducts.map(product => (
          <SkeletaProduct
          key={product.id}
          emriProduktit={product.emriProduktit}
          description={product.description}
          cmimi={product.cmimi}
          reviews={product.reviews}
          image={product.image}
            onAddToCart={addToCart}
            viewproduct={() => viewProductDetails(product.id)}
          />
        ))}
      </div>

      <h2>Women's Products</h2>
      <div className="product-list">
        {womenProducts.map(product => (
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

export default HomeComp;
