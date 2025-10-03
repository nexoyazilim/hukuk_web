import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Home Css/HomeAbout.css';

const HomeAbout = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <section className="about-preview">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Hakkımızda</h2>
            <p className="section-description">
              Hukuki danışmanlık alanında Türkiye'nin en güçlü isimlerinden biri olan 
              büromuz, hizmetlerini derin hukuki deneyime ve farklı alanlarda tecrübeye 
              sahip 120'nin üstünde avukat, danışman ve destek biriminden oluşan yetkin 
              bir ekiple sunmaktadır.
            </p>
            <div className="about-image">
              <img 
                src="https://i.hizliresim.com/chfi39v.png" 
                alt="Adalet ve Hukuk" 
                className="section-image"
              />
            </div>
            <Link to="/hakkimizda" className="btn btn-primary" onClick={scrollToTop}>Devamını Oku</Link>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h3 className="stat-number">120+</h3>
              <p className="stat-label">Uzman Avukat</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">25+</h3>
              <p className="stat-label">Yıllık Deneyim</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">1000+</h3>
              <p className="stat-label">Başarılı Dava</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
