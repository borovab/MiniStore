import React from "react";
import "./SkeletaProduct.css";

const SkeletaProduct = ({
  id,
  emriProduktit,
  Kategoria,
  cmimi,
  reviews,
  description,
  onAddToCart,
  showAddToCartButton = true,
  showOnCard = false,
  removeFromCart,
  viewproductbtn = true,
  viewproduct,
  image,

}) => {
  return (
    <div className="productStyle">
      <h3>Product: {emriProduktit}</h3>
      {image && <img src={image} alt={emriProduktit} />}
      <p>Description: {description}</p>
      <div>Price: ${cmimi}</div>
      <div>Reviews: {reviews}</div>
      {showAddToCartButton && (
        <button
          onClick={() =>
            onAddToCart({
              id,
              emriProduktit,
              description,
              Kategoria,
              cmimi,
              reviews,
            })
          }
        >
          Add to Cart
        </button>
      )}
      {showOnCard && (
        <button onClick={removeFromCart}>Remove from card</button>
      )}
        {viewproductbtn && (
        <button onClick={viewproduct}>Wiew Product</button>
      )}
    </div>
  );
};

export default SkeletaProduct;
