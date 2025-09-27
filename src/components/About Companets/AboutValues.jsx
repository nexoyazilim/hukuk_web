import React from 'react';
import '../../css/About Css/AboutValues.css';

const AboutValues = () => {
  return (
    <section className="about-values">
      <div className="container">
        <h2 className="section-title">Değerlerimiz</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="value-title">Mükemmellik</h3>
            <p className="value-description">
              Her projede en yüksek standartlarda hizmet sunarak mükemmelliği hedefliyoruz.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <h3 className="value-title">Güven</h3>
            <p className="value-description">
              Müvekkillerimizle kurduğumuz güven ilişkisi, başarımızın temel taşıdır.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
              </svg>
            </div>
            <h3 className="value-title">Şeffaflık</h3>
            <p className="value-description">
              Tüm süreçlerde açık ve şeffaf iletişim kurarak güven inşa ediyoruz.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <h3 className="value-title">İnovasyon</h3>
            <p className="value-description">
              Hukuk alanında yenilikçi yaklaşımlarla fark yaratmaya odaklanıyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
