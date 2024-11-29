import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return(
    <footer className= "footer" style={{ textAlign: 'center' }}>
        <p>
             {new Date().getFullYear()} Welcome To My Key Staxx || Carrene Kyla Martin Lacson
        </p>
    </footer>
  )
  }
export default Footer;