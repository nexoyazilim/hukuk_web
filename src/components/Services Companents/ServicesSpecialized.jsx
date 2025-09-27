import React from 'react';
import '../../css/Services Css/ServicesSpecialized.css';

const ServicesSpecialized = () => {
  return (
    <section className="specialized-services">
      <div className="container">
        <h2 className="section-title">Uzmanlık Alanlarımız</h2>
        <div className="specialized-grid">
          <div className="specialized-card">
            <h3 className="specialized-title">Uluslararası Hukuk</h3>
            <p className="specialized-description">
              Uluslararası ticaret, yatırım ve uyuşmazlık çözümü konularında uzman hizmet.
            </p>
          </div>
          <div className="specialized-card">
            <h3 className="specialized-title">Fikri Mülkiyet</h3>
            <p className="specialized-description">
              Patent, marka, telif hakkı ve fikri mülkiyet koruması alanında hizmet.
            </p>
          </div>
          <div className="specialized-card">
            <h3 className="specialized-title">Vergi Hukuku</h3>
            <p className="specialized-description">
              Vergi planlaması, uyuşmazlıkları ve yasal danışmanlık hizmetleri.
            </p>
          </div>
          <div className="specialized-card">
            <h3 className="specialized-title">Bankacılık ve Finans</h3>
            <p className="specialized-description">
              Finansal işlemler, kredi anlaşmaları ve bankacılık hukuku alanında hizmet.
            </p>
          </div>
          <div className="specialized-card">
            <h3 className="specialized-title">Enerji Hukuku</h3>
            <p className="specialized-description">
              Yenilenebilir enerji, petrol ve doğalgaz projelerinde hukuki danışmanlık.
            </p>
          </div>
          <div className="specialized-card">
            <h3 className="specialized-title">Teknoloji Hukuku</h3>
            <p className="specialized-description">
              Dijital dönüşüm, veri koruma ve teknoloji projelerinde hukuki destek.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSpecialized;
