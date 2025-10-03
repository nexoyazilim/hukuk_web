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
              <img 
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80" 
                alt="Adalet Terazisi" 
                className="about-image-content"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCards;
