import React from 'react';
import '../../css/Home Css/HomeAbout.css';

const HomeAbout = () => {
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
            <a href="/hakkimizda" className="btn btn-primary">Devamını Oku</a>
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
