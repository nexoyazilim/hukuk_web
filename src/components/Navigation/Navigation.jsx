import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <div className="logo-container">
              <span className="logo-text">MKS</span>
            </div>
          </Link>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Ana Sayfa
            </Link>
            <Link to="/hakkimizda" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Hakkımızda
            </Link>
            <Link to="/hizmetlerimiz" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Hizmetlerimiz
            </Link>
            <Link to="/duyurular" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Duyurular
            </Link>
            <Link to="/iletisim" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              İletişim
            </Link>
          </div>
          
          <div className="nav-actions">
            <div className="language-selector">
              <span className="lang-active">TR</span>
              <span className="lang-separator">|</span>
              <span className="lang-option">EN</span>
            </div>
            
            <button className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
