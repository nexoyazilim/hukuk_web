import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">İletişim</h3>
            <div className="contact-info">
              <p><strong>Telefon:</strong> +90 (212) 123 45 67</p>
              <p><strong>E-posta:</strong> info@hukukburosu.com</p>
              <p><strong>Adres:</strong> Levent Mahallesi, Büyükdere Caddesi No: 123, Şişli/İstanbul</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Hızlı Linkler</h4>
            <ul className="footer-links">
              <li><Link to="/hakkimizda">Hakkımızda</Link></li>
              <li><Link to="/hizmetlerimiz">Hizmetlerimiz</Link></li>
              <li><Link to="/duyurular">Duyurular</Link></li>
              <li><Link to="/iletisim">İletişim</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Hizmetlerimiz</h4>
            <ul className="footer-links">
              <li><a href="/hizmetlerimiz#ticaret">Ticaret Hukuku</a></li>
              <li><a href="/hizmetlerimiz#ceza">Ceza Hukuku</a></li>
              <li><a href="/hizmetlerimiz#aile">Aile Hukuku</a></li>
              <li><a href="/hizmetlerimiz#tazminat">Tazminat Hukuku</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Bülten</h4>
            <p className="newsletter-text">
              Güncel hukuki gelişmeler ve duyurular için bültenimize kaydolun.
            </p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="newsletter-input"
              />
              <button className="newsletter-btn">Kaydol</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 Hukuk Bürosu. Tüm hakları saklıdır.
            </p>
            <div className="footer-bottom-links">
              <a href="#gizlilik">Gizlilik Politikası</a>
              <a href="#kullanim">Kullanım Koşulları</a>
              <a href="#cerez">Çerez Politikası</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
