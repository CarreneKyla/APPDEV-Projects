import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import GameReview from './GameReview';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <>
      <Header />
      {isLoggedIn ? <GameReview /> : <Login onLogin={handleLogin} />}
      <Footer />
    </>
  );
}
