import React, { useState } from 'react';

const ReviewsPage = () => {
  const [name, setName] = useState('');
  const [userReview, setUserReview] = useState('');
  const [productReview, setProductReview] = useState('');
  const [submittedProductReviews, setSubmittedProductReviews] = useState([]);
  const [submittedCompanyReviews, setSubmittedCompanyReviews] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleProductReviewChange = (e) => {
    setProductReview(e.target.value);
  };

  const handleUserReviewChange = (e) => {
    setUserReview(e.target.value);
  };

  const handleProductReviewSubmit = (e) => {
    e.preventDefault();
    if (productReview.trim()) {
      setSubmittedProductReviews([
        ...submittedProductReviews,
        { id: submittedProductReviews.length + 1, reviewer: name || 'Anonymous', feedback: productReview },
      ]);
      setProductReview('');
    }
  };

  const handleCompanyReviewSubmit = (e) => {
    e.preventDefault();
    if (userReview.trim()) {
      setSubmittedCompanyReviews([
        ...submittedCompanyReviews,
        { id: submittedCompanyReviews.length + 1, reviewer: name || 'Anonymous', feedback: userReview },
      ]);
      setUserReview('');
    }
  };

  return (
    <div className="reviews-page">
      <h1>Reviews Page</h1>

      <div className="name-input">
        <label>
          Your Name: 
          <input 
            type="text" 
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
      </div>

      <div className="product-reviews">
        <h2>Product Reviews</h2>
        <form onSubmit={handleProductReviewSubmit}>
          <textarea
            placeholder="Write your product review..."
            value={productReview}
            onChange={handleProductReviewChange}
          />
          <button type="submit">Submit Product Review</button>
        </form>
        <ul>
          {submittedProductReviews.map((review) => (
            <li key={review.id}>
              <strong>{review.reviewer}:</strong> {review.feedback}
            </li>
          ))}
        </ul>
      </div>

      <div className="company-reviews">
        <h2>Company Reviews</h2>
        <form onSubmit={handleCompanyReviewSubmit}>
          <textarea
            placeholder="Write your company review..."
            value={userReview}
            onChange={handleUserReviewChange}
          />
          <button type="submit">Submit Company Review</button>
        </form>
        <ul>
          {submittedCompanyReviews.map((review) => (
            <li key={review.id}>
              <strong>{review.reviewer}:</strong> {review.feedback}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReviewsPage;
