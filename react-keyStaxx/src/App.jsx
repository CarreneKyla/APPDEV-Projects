import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import ReviewsPage from './components/Reviews';
import CompanyProfile from './components/CompanyProfile';
import DeveloperProfile from './components/DeveloperProfile';
import EmployeeDetails from './components/EmployeeDetails';
import HomePage from './components/HomePage'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/company-profile/:id" element={<EmployeeDetails />} />
        <Route path="/developer" element={<DeveloperProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
