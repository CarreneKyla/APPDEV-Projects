import { useLocation } from 'react-router-dom'

export default function Game() {
  const location = useLocation()
  const game = location.state.game

  return (
    <div className="game-container">
      <h1 className="game-title">{game.name}</h1>
      <p className="game-descriptions">{game.description}</p>
      <p className="game-info"><strong>Publisher:</strong> {game.publisher}</p>
      <p className="game-info"><strong>Author:</strong> {game.author}</p>
      <h2 className="reviews-title">Reviews</h2>
      <ul className="reviews-list">
        {game.reviews.map((review, index) => (
          <li key={index} className="review-item">{review}</li>
        ))}
      </ul>
    </div>
  )
}
