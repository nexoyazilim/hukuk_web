import React from 'react';
import '../../css/Contact Css/ContactInfo.css';

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <div className="container">
        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3 className="info-title">Telefon</h3>
            <p className="info-detail">+90 (212) 123 45 67</p>
            <p className="info-detail">+90 (532) 987 65 43</p>
            <p className="info-hours">Pazartesi - Cuma: 09:00 - 18:00</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <h3 className="info-title">E-posta</h3>
            <p className="info-detail">info@hukukburosu.com</p>
            <p className="info-detail">avukat@hukukburosu.com</p>
            <p className="info-hours">24 saat içinde yanıt</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3 className="info-title">Adres</h3>
            <p className="info-detail">Levent Mahallesi, Büyükdere Caddesi</p>
            <p className="info-detail">No: 123, Kat: 15, Şişli/İstanbul</p>
            <p className="info-hours">Metro: Levent İstasyonu</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
