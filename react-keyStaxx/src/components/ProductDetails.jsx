import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [showManual, setShowManual] = useState(false);
  const [productReview, setProductReview] = useState('');
  const [submittedProductReviews, setSubmittedProductReviews] = useState([]);

  const pdfFile = '/public/manuals/manual.pdf';

  const toggleManual = () => {
    setShowManual(!showManual);
  };

  // Load stored reviews from localStorage on component mount
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem(`productReview_${id}`));
    if (savedReviews) {
      setSubmittedProductReviews(savedReviews);
    }
  }, [id]);

  // Save reviews to localStorage when they change
  useEffect(() => {
    if (submittedProductReviews.length > 0) {
      localStorage.setItem(`productReview_${id}`, JSON.stringify(submittedProductReviews));
    }
  }, [submittedProductReviews, id]);

  const handleProductReviewChange = (e) => {
    setProductReview(e.target.value);
  };

  const handleProductReviewSubmit = (e) => {
    e.preventDefault();
    if (productReview.trim()) {
      const newReview = {
        id: submittedProductReviews.length + 1,
        feedback: productReview,
      };
      setSubmittedProductReviews([...submittedProductReviews, newReview]);
      setProductReview('');
    }
  };

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Materials:</strong> {product.materials}</p>
      <p><strong>Switches:</strong> {product.switches}</p>
      <p><strong>Connection:</strong> {product.connection}</p>
      <p><strong>Price:</strong> {product.price}</p>

      <div className="pdf-section">
        <button onClick={toggleManual} className="show-manual-button">
          {showManual ? 'Hide Product Manual' : 'Show Product Manual'}
        </button>

        {showManual && (
          <div className="pdf-viewer">
            <iframe
              src={pdfFile}
              width="50%"
              height="800px"
              title="Product Manual"
              style={{ margin: '0 auto', display: 'block' }}
            ></iframe>
          </div>
        )}
      </div>

      <div className="product-reviews">
        <h2>Product Reviews</h2>
        <form onSubmit={handleProductReviewSubmit}>
          <textarea
            placeholder="Write your product review..."
            value={productReview}
            onChange={handleProductReviewChange}
          />
          <button type="submit" className="submit-review-button">Submit Review</button>
        </form>

        <div className="reviews-list">
          {submittedProductReviews.map((review) => (
            <div key={review.id} className="review-card">
              <strong>Review {review.id}:</strong>
              <p>{review.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
