import React from 'react';
import '../../css/About Css/AboutHistory.css';

const AboutHistory = () => {
  return (
    <section className="about-history">
      <div className="container">
        <h2 className="section-title">Tarihçemiz</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2000</div>
            <div className="timeline-content">
              <h3 className="timeline-title">Kuruluş</h3>
              <p className="timeline-description">
                Büromuz, hukuk alanında uzmanlaşmış bir grup avukat tarafından kuruldu.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2005</div>
            <div className="timeline-content">
              <h3 className="timeline-title">Büyüme</h3>
              <p className="timeline-description">
                Ekibimizi genişleterek farklı hukuk alanlarında hizmet vermeye başladık.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2010</div>
            <div className="timeline-content">
              <h3 className="timeline-title">Uluslararası Açılım</h3>
              <p className="timeline-description">
                Uluslararası hukuk alanında hizmet vermeye başladık ve yurtdışı ortaklıklar kurduk.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2020</div>
            <div className="timeline-content">
              <h3 className="timeline-title">Dijital Dönüşüm</h3>
              <p className="timeline-description">
                Teknolojik altyapımızı güçlendirerek dijital hukuk hizmetleri sunmaya başladık.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2025</div>
            <div className="timeline-content">
              <h3 className="timeline-title">Bugün</h3>
              <p className="timeline-description">
                Türkiye'nin önde gelen hukuk bürolarından biri olarak hizmet vermeye devam ediyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
