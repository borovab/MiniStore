import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SkeletaProduct from "../SkeletaProduct/SkeletaProduct";

const SingleArticle = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  
  const getArticle = async () => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch Article");
      }
      const data = await response.json();
      setPost(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticle();
  }, [id]);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="product-list">
        {post ? (
          <SkeletaProduct
            key={post.id}
            emriProduktit={post.emriProduktit}
            description={post.description}
            cmimi={post.cmimi}
            reviews={post.reviews}
            showAddToCartButton={false}
            showOnCard={false}
            image={post.image}
            viewproductbtn = {false}
          />
        ) : (
          <div>No product found</div>
        )}
      </div>
    </>
  );
};

export default SingleArticle;
