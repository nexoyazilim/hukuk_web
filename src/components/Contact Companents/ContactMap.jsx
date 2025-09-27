import React from 'react';
import '../../css/Contact Css/ContactMap.css';

const ContactMap = () => {
  return (
    <section className="map-section">
      <div className="container">
        <h2 className="section-title">Ofisimizi Ziyaret Edin</h2>
        <div className="map-container">
          <div className="map-placeholder">
            <svg width="100%" height="400" viewBox="0 0 800 400" fill="none">
              <rect width="800" height="400" fill="#f1f5f9"/>
              <rect x="50" y="50" width="700" height="300" fill="#e2e8f0" rx="8"/>
              <circle cx="400" cy="200" r="8" fill="#1e40af"/>
              <path d="M400 200 L420 180 L380 180 Z" fill="#1e40af"/>
              <text x="400" y="250" textAnchor="middle" fill="#64748b" fontSize="16">Levent Mahallesi, Büyükdere Caddesi</text>
              <text x="400" y="270" textAnchor="middle" fill="#64748b" fontSize="14">No: 123, Kat: 15, Şişli/İstanbul</text>
            </svg>
          </div>
          <div className="map-info">
            <h3 className="map-info-title">Nasıl Gelirsiniz?</h3>
            <div className="transport-options">
              <div className="transport-option">
                <div className="transport-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  </svg>
                </div>
                <div className="transport-detail">
                  <h4>Metro</h4>
                  <p>M2 Levent İstasyonu - 5 dakika yürüme</p>
                </div>
              </div>
              <div className="transport-option">
                <div className="transport-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div className="transport-detail">
                  <h4>Otobüs</h4>
                  <p>Büyükdere Caddesi durakları - 2 dakika yürüme</p>
                </div>
              </div>
              <div className="transport-option">
                <div className="transport-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  </svg>
                </div>
                <div className="transport-detail">
                  <h4>Özel Araç</h4>
                  <p>Valet park hizmeti mevcuttur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
