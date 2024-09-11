import React from 'react';
import './Header.css';
import facebookIcon from './facebook.png';
import instagramIcon from './instagram.png';
import telegramIcon from './telegram.png';
import snapchatIcon from './snapchat.png';
import twitterIcon from './twitter.png';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="middle">
          <h1>My React Profile</h1>
        </div>
        <div className="right">
          <a href="https://www.facebook.com/carrene.lo" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/carrenenie/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://t.me/Carrenenie" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <img src={telegramIcon} alt="Telegram" className="social-icon" />
          </a>
          <a href="https://www.snapchat.com/add/carreneniee?share_id=DQNsmq02SgeZZARuX5c7iQ&locale=en_PH" target="_blank" rel="noopener noreferrer" aria-label="Snapchat">
            <img src={snapchatIcon} alt="Snapchat" className="social-icon" />
          </a>
          <a href="https://twitter.com/carr_ene" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <img src={twitterIcon} alt="Twitter" className="social-icon" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
