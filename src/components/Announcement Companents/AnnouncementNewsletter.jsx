import React from 'react';
import '../../css/Announcement Css/AnnouncementNewsletter.css';

const AnnouncementNewsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Bültenimize Kaydolun</h2>
          <p className="newsletter-subtitle">
            Güncel hukuki gelişmeler, sektörel yayınlar ve duyurular için bültenimize kaydolun.
          </p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="E-posta adresiniz" 
              className="newsletter-input"
            />
            <button className="newsletter-btn">Kaydol</button>
          </div>
          <p className="newsletter-privacy">
            Kişisel verileriniz gizlilik politikamız kapsamında korunmaktadır.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementNewsletter;
