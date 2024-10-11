import React, { useState, useEffect } from 'react';
import WelcomePage from './WelcomePage';
import KantoPokedex from './KantoPokedex';
import LoadingPage from './LoadingPage';
import Header from './Header'; 

const App = () => {
  const [isPokedexVisible, setPokedexVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleGetStarted = () => {
    setLoading(true);
    setTimeout(() => {
      setPokedexVisible(true);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (isLoading) {
      document.title = "Loading...";
    } else if (isPokedexVisible) {
      document.title = "Kanto Pokédex";
    } else {
      document.title = "Welcome to the Pokédex";
    }
  }, [isLoading, isPokedexVisible]);

  return (
    <div className="app-container">
      {isLoading && <LoadingPage />}
      {!isLoading && (
        <>
          {isPokedexVisible && <Header />}
          <div className={`pokedex-body ${isPokedexVisible ? 'visible' : ''}`}>
            {isPokedexVisible ? <KantoPokedex /> : <WelcomePage onGetStarted={handleGetStarted} />}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
