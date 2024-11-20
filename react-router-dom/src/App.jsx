import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Specifications from './pages/Specifications';
import Setup from './pages/Setup';
import Troubleshooting from './pages/Troubleshooting';
import Warranty from './pages/Warranty';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/specifications" element={<Specifications />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/troubleshooting" element={<Troubleshooting />} />
          <Route path="/warranty" element={<Warranty />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
