import React from 'react';
import '../../css/About Css/AboutProcess.css';

const AboutProcess = () => {
  return (
    <section className="about-process">
      <div className="container">
        <h2 className="section-title">Ödüllerimiz ve Başarılarımız</h2>
        <div className="awards-grid">
          <div className="award-card">
            <div className="award-year">2025</div>
            <h3 className="award-title">Yılın Hukuk Bürosu - Türkiye</h3>
            <p className="award-organization">Benchmark Litigation Europe Awards</p>
          </div>
          <div className="award-card">
            <div className="award-year">2024</div>
            <h3 className="award-title">En İyi Ticaret Hukuku Bürosu</h3>
            <p className="award-organization">Legal 500</p>
          </div>
          <div className="award-card">
            <div className="award-year">2023</div>
            <h3 className="award-title">Müşteri Memnuniyeti Ödülü</h3>
            <p className="award-organization">Chambers & Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;
