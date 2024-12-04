import React from 'react';
import '../styles/general.css';

const HomePage = () => {
  return (
    <div className="centered-content">
      <div className="info-card">
        <h1>Welcome to KeyStaxx</h1>
        <p>"The most innovative keyboards worldwide."</p>
      </div>

      <div className="mission-vision-container">
        <div className="info-card mission">
          <h2>Our Mission</h2>
          <p>Our mission is to deliver premium keyboards inspired by innovation and design.</p>
        </div>
        
        <div className="info-card vision">
          <h2>Our Vision</h2>
          <p>Our vision is to enhance typing experiences globally.</p>
        </div>
      </div>

      <div className="info-card">
        <h2>What We Offer</h2>
        <p>
          KeyStaxx offers premium mechanical keyboards that combine innovative
          technology with aesthetic design, providing a superior typing experience.
        </p>
      </div>

      <div className="info-card">
        <h2>Client and Employee Feedback</h2>
        <div className="reviews">
          <div className="review-container">
            <div className="review client">
              <h3>Client Review 1</h3>
              <p>
                "KeyStaxx keyboards have transformed my typing experience. The
                build quality is exceptional, and the design is sleek and modern."
              </p>
            </div>
            <div className="review client">
              <h3>Client Review 2</h3>
              <p>
                "I love the customization options available for each keyboard.
                The colors, switches, and feel of the keys are top-notch!"
              </p>
            </div>
          </div>
          <div className="review-container">
            <div className="review">
              <h3>Employee Review 1</h3>
              <p>
                "Working at KeyStaxx has been an incredible experience. The
                company values creativity, innovation, and a strong sense of
                teamwork."
              </p>
            </div>
            <div className="review">
              <h3>Employee Review 2</h3>
              <p>
                "At KeyStaxx, I'm constantly learning and growing in a dynamic and collaborative environment. The culture of innovation keeps me excited to work every day."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
