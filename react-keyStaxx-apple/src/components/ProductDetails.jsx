import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Materials:</strong> {product.materials}</p>
      <p><strong>Switches:</strong> {product.switches}</p>
      <p><strong>Connection:</strong> {product.connection}</p>
      <p><strong>Price:</strong> {product.price}</p>
    </div>
  );
};

export default ProductDetails;
