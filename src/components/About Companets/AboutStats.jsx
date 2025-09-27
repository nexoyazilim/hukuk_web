import React from 'react';
import '../../css/About Css/AboutStats.css';

const AboutStats = () => {
  return (
    <section className="about-stats">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <h3 className="stat-number">120+</h3>
            <p className="stat-label">Uzman Avukat</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="stat-number">25+</h3>
            <p className="stat-label">Yıllık Deneyim</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
              </svg>
            </div>
            <h3 className="stat-number">15</h3>
            <p className="stat-label">Hukuk Alanı</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <h3 className="stat-number">1000+</h3>
            <p className="stat-label">Başarılı Dava</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
