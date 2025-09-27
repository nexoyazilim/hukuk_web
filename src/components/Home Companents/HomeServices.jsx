import React from 'react';
import '../../css/Home Css/HomeServices.css';

const HomeServices = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Hizmetlerimiz</h2>
        <p className="section-subtitle">
          Geniş hizmet yelpazemizle tüm hukuki ihtiyaçlarınıza çözüm sunuyoruz
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="service-title">Ticaret Hukuku</h3>
            <p className="service-description">
              Şirket kuruluşu, birleşme, devralma ve ticari anlaşmalar konularında uzman danışmanlık.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
              </svg>
            </div>
            <h3 className="service-title">Ceza Hukuku</h3>
            <p className="service-description">
              Ceza davalarında savunma ve hukuki süreç yönetimi konularında profesyonel hizmet.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <h3 className="service-title">Aile Hukuku</h3>
            <p className="service-description">
              Boşanma, velayet, nafaka ve aile içi anlaşmazlıklar konularında hassas yaklaşım.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <h3 className="service-title">Tazminat Hukuku</h3>
            <p className="service-description">
              Maddi ve manevi tazminat davalarında haklarınızın korunması için uzman savunma.
            </p>
          </div>
        </div>
        <div className="services-cta">
          <a href="/hizmetlerimiz" className="btn btn-primary">Tüm Hizmetlerimizi Görün</a>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
