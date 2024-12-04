import React from 'react';
import products from '../data/products';
import { Link } from 'react-router-dom';
import '../styles/general.css';
import '../styles/product-listing.css';

const ProductListing = () => {
  return (
    <div className="container">
      <div className="product-listing">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Price:</strong> {product.price}</p>
            <Link to={`/products/${product.id}`}>
              <button>View Product</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
