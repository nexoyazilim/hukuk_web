import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo" onClick={handleNavClick}>
            <div className="logo-container">
              <img src={`${import.meta.env.BASE_URL}hukuk169.PNG`} alt="MKS Hukuk Bürosu" className="logo-image" />
            </div>
          </Link>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" className="nav-link" onClick={handleNavClick}>
              Ana Sayfa
            </Link>
            <Link to="/hakkimizda" className="nav-link" onClick={handleNavClick}>
              Hakkımızda
            </Link>
            <Link to="/hizmetlerimiz" className="nav-link" onClick={handleNavClick}>
              Hizmetlerimiz
            </Link>
            <Link to="/duyurular" className="nav-link" onClick={handleNavClick}>
              Duyurular
            </Link>
            <Link to="/iletisim" className="nav-link" onClick={handleNavClick}>
              İletişim
            </Link>
          </div>
          
          <div className="nav-actions">
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
