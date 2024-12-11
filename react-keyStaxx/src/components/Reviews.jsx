import React, { useState, useEffect } from 'react';
import '../styles/ReviewsPage.css'; // Import the CSS file

const ReviewsPage = () => {
  const [name, setName] = useState('');
  const [userReview, setUserReview] = useState('');
  const [submittedCompanyReviews, setSubmittedCompanyReviews] = useState([]);

  useEffect(() => {
    // Load reviews from localStorage when the component mounts
    const companyReviews = JSON.parse(localStorage.getItem('companyReviews')) || [];
    console.log("Loaded reviews from localStorage:", companyReviews);  // Debug log
    setSubmittedCompanyReviews(companyReviews);
  }, []);

  useEffect(() => {
    // Update localStorage whenever the reviews state changes
    if (submittedCompanyReviews.length > 0) {
      localStorage.setItem('companyReviews', JSON.stringify(submittedCompanyReviews));
      console.log("Saved reviews to localStorage:", submittedCompanyReviews);  // Debug log
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
      // Generate a unique ID for each review to avoid duplicate IDs
      const newReview = {
        id: Date.now(), // Using the current timestamp for a unique ID
        reviewer: name || 'Anonymous',
        feedback: userReview,
      };
      setSubmittedCompanyReviews((prevReviews) => [...prevReviews, newReview]);
      setUserReview(''); // Clear the review input field
      setName(''); // Clear the name input field
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
