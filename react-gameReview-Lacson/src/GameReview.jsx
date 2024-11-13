import React, { useState } from 'react';

export default function GameReview() {
  const [reviews, setReviews] = useState([]);
  const [game, setGame] = useState('');
  const [review, setReview] = useState('');
  const [date, setDate] = useState('');

  const handleGameChange = (event) => {
    setGame(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const addReview = () => {
    const today = new Date().toLocaleDateString();
    const newReview = { game, review, date: today };

    setReviews([...reviews, newReview]);
    setGame('');
    setReview('');
  };

  return (
    <div className="review-container">
      <h2>Add a Game Review</h2>
      <br />
      <hr />
      <br />
      <label>Game Title:</label>
      <input type="text" value={game} onChange={handleGameChange} />
      <br />
      <label>Review:</label>
      <textarea value={review} onChange={handleReviewChange} />
      <br />
      <button onClick={addReview}>Submit Review</button>

      <div className="reviews-list">
        <h3>All Reviews</h3>
        {reviews.map((r, index) => (
          <div key={index} className="review-item">
            <h4>{r.game}</h4>
            <p>{r.review}</p>
            <small>Date: {r.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
