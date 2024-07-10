import React, { useEffect, useState } from 'react';
import SkeletaProduct from '../../components/SkeletaProduct/SkeletaProduct';


const CardComp = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cart')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch cart data');
        }
        return response.json();
      })
      .then(data => setCartProducts(data))
      .catch(error => {
        console.error('Error fetching cart data:', error);
      });
  }, []); 

  const removeFromCart = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/cart/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete item from cart');
      }
  
      const updatedResponse = await fetch('http://localhost:3000/cart');
      if (!updatedResponse.ok) {
        throw new Error('Failed to fetch updated cart data');
      }
      
      const updatedCart = await updatedResponse.json();
      setCartProducts(updatedCart);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const calculateTotal = () => {
    return cartProducts.reduce((total, product) => total + product.cmimi, 0);
  };

  return (
    <div>
      <h3>Total: {calculateTotal()} €</h3>
      <div className="product-list">
        {cartProducts.map(product => (
          <SkeletaProduct
            key={product.id}
            emriProduktit={product.emriProduktit}
            description={product.description}
            cmimi={product.cmimi}
            reviews={product.reviews}
            showAddToCartButton={false}
            showOnCard={true}
            removeFromCart={() => removeFromCart(product.id)}
            viewproductbtn = {false}
          />
        ))}
      </div>

    </div>
  );
};

export default CardComp;