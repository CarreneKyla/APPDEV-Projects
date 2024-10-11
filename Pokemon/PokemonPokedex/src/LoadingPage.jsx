// LoadingPage.js
import React from 'react';
import './LoadingPage.css';
import loadingGif from '../src/psyduck.gif'; // Update the path accordingly

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <h2>Loading...</h2>
      <img 
        src={loadingGif} 
        alt="Loading GIF" 
        className="loading-gif" // Use a class for styling
      />
    </div>
  );
};

export default LoadingPage;
