import React from 'react';
import '../../css/Home Css/HomeHero.css';

const HomeHero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Türkiye'nin En Güçlü Hukuk Bürosu
        </h1>
        <p className="hero-subtitle">
          Derin hukuki deneyime ve farklı alanlarda tecrübeye sahip uzman ekibimizle, 
          müvekkillerimize en kaliteli hukuki danışmanlık hizmetini sunuyoruz.
        </p>
        <div className="hero-buttons">
          <a href="#iletisim" className="btn btn-primary">Hemen İletişime Geç</a>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
