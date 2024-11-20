import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>KB-X1000 Keyboard Documentation</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/overview">Overview</Link> |{' '}
        <Link to="/specifications">Specifications</Link> |{' '}
        <Link to="/setup">Setup</Link> | <Link to="/troubleshooting">Troubleshooting</Link> |{' '}
        <Link to="/warranty">Warranty</Link>
      </nav>
    </header>
  );
}

export default Header;
