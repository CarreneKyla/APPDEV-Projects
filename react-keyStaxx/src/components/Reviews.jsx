import React, { useState, useEffect } from 'react';
import '../styles/ReviewsPage.css';

const ReviewsPage = () => {
  const [name, setName] = useState('');
  const [userReview, setUserReview] = useState('');
  const [submittedCompanyReviews, setSubmittedCompanyReviews] = useState([]);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('companyReviews')) || [];
    setSubmittedCompanyReviews(storedReviews);
  }, []);

  useEffect(() => {
    if (submittedCompanyReviews.length > 0) {
      localStorage.setItem('companyReviews', JSON.stringify(submittedCompanyReviews));
    }
  }, [submittedCompanyReviews]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUserReviewChange = (e) => {
    setUserReview(e.target.value);
  };

  const handleCompanyReviewSubmit = (e) => {
    e.preventDefault();
    if (userReview.trim()) {
      const newReview = {
        id: Date.now(),
        reviewer: name || 'Anonymous',
        feedback: userReview,
      };
      setSubmittedCompanyReviews((prevReviews) => [...prevReviews, newReview]);
      setUserReview('');
      setName('');
    }
  };

  return (
    <div className="reviews-page">
      <h1>Company Reviews</h1>

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

      <form onSubmit={handleCompanyReviewSubmit}>
        <textarea
          placeholder="Write your company review..."
          value={userReview}
          onChange={handleUserReviewChange}
        />
        <button type="submit">Submit Company Review</button>
      </form>

      <div className="reviews-list">
        {submittedCompanyReviews.map((review) => (
          <div key={review.id} className="review-card">
            <strong>{review.reviewer}:</strong>
            <p>{review.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
