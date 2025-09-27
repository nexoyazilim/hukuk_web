import React from 'react';
import '../../css/About Css/AboutTeam.css';

const AboutTeam = () => {
  return (
    <section className="about-team">
      <div className="container">
        <div className="preview-content">
          <div className="preview-text">
            <h2 className="preview-title">Uzman Ekibimiz</h2>
            <p className="preview-description">
              Farklı hukuk alanlarında uzmanlaşmış, deneyimli avukatlarımız ve danışmanlarımız, 
              müvekkillerimizin en karmaşık hukuki sorunlarına bile etkili çözümler sunmaktadır. 
              Ekibimiz, sürekli eğitim ve gelişim anlayışıyla kendini yenilemekte ve 
              hukuk alanındaki son gelişmeleri takip etmektedir.
            </p>
            <a href="/ekibimiz" className="btn btn-primary">Ekibimizi Tanıyın</a>
          </div>
          <div className="preview-stats">
            <div className="stat-item">
              <h3 className="stat-number">120+</h3>
              <p className="stat-label">Uzman Avukat</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">15</h3>
              <p className="stat-label">Hukuk Alanı</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">25+</h3>
              <p className="stat-label">Yıllık Deneyim</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
