import React from 'react';
import '../../css/Contact Css/ContactMap.css';

const ContactMap = () => {
  return (
    <section className="map-section">
      <div className="container">
        <h2 className="section-title">Ofisimizi Ziyaret Edin</h2>
        <div className="map-container">
          <div className="map-placeholder">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.0738749988754!2d29.012447315437867!3d41.081666979289745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab6f707eb12f1%3A0x31c6e85f8daff051!2zQsO8ecO8a2RlcmUgQ2QuLCDFnmnFn2xpL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1635789012345!5m2!1str!2str"
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hukuk Bürosu Konum"
              className="google-map"
            />
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
