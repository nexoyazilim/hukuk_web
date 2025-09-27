import React from 'react';
import '../../css/About Css/AboutCards.css';

const AboutCards = () => {
  return (
    <section className="about-cards">
      <div className="container">
        <div className="content-grid">
          <div className="content-text">
            <h2 className="content-title">Vizyonumuz ve Misyonumuz</h2>
            <p className="content-paragraph">
              Hukuk Bürosu olarak, müvekkillerimize en kaliteli hukuki danışmanlık hizmetini 
              sunmak ve adaletin tecellisinde öncü rol oynamak vizyonumuzu oluşturmaktadır. 
              Misyonumuz ise, hukuki süreçlerde müvekkillerimizin haklarını en etkili şekilde 
              korumak ve onlara en iyi çözümleri sunmaktır.
            </p>
            <p className="content-paragraph">
              120'nin üstünde avukat, danışman ve destek personelinden oluşan ekibimiz, 
              farklı hukuk alanlarında derinlemesine uzmanlaşmış profesyonellerden oluşmaktadır. 
              Bu çeşitlilik, müvekkillerimizin her türlü hukuki ihtiyacına yanıt verebilmemizi sağlamaktadır.
            </p>
          </div>
          <div className="content-image">
            <div className="image-placeholder">
              <svg width="100%" height="300" viewBox="0 0 400 300" fill="none">
                <rect width="400" height="300" fill="#f1f5f9" rx="8"/>
                <circle cx="200" cy="150" r="50" fill="#e2e8f0"/>
                <path d="M150 150 L200 100 L250 150 L200 200 Z" fill="#cbd5e1"/>
                <text x="200" y="160" textAnchor="middle" fill="#64748b" fontSize="14">Hukuk Bürosu</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCards;
