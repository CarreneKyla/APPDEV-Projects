import React from 'react';
import pokedexImage from '../src/Pokédex_logo.png';
import mapImage from '../src/map.png'; 
import './WelcomePage.css';

const WelcomePage = ({ onGetStarted }) => {
  return (
    <div className="container">
      <header className="header">
        <img src={pokedexImage} alt="Pokedex" className="pokedex-image" />
      </header>
      <div className="content-wrapper">
        <img src={mapImage} alt="Map" className="map-image" />
        <div className="content-overlay">
          <h1>Welcome!</h1>
          <p>Explore the wonder of Pokemons in the <strong></strong>KANTO region.</p>
          <button className="button" onClick={onGetStarted}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
