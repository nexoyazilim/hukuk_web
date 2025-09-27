import React from 'react';
import '../../css/Services Css/ServicesMain.css';

const ServicesMain = () => {
  return (
    <section className="main-services">
      <div className="container">
        <h2 className="section-title">Ana Hizmet Alanlarımız</h2>
        <div className="services-grid">
          <div className="service-card main-service">
            <div className="service-header">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                </svg>
              </div>
              <h3 className="service-title">Ticaret Hukuku</h3>
            </div>
            <div className="service-content">
              <p className="service-description">
                Şirket kuruluşu, birleşme, devralma, ortaklık anlaşmaları ve ticari uyuşmazlıklar 
                konularında kapsamlı hukuki danışmanlık hizmeti sunuyoruz.
              </p>
              <ul className="service-features">
                <li>Şirket Kuruluşu ve Tescil İşlemleri</li>
                <li>Birleşme ve Devralma İşlemleri</li>
                <li>Ticari Anlaşmalar ve Sözleşmeler</li>
                <li>Ticari Uyuşmazlıklar ve Dava Takibi</li>
                <li>Ortaklık ve Hissedarlık İşlemleri</li>
              </ul>
            </div>
          </div>

          <div className="service-card main-service">
            <div className="service-header">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="service-title">Ceza Hukuku</h3>
            </div>
            <div className="service-content">
              <p className="service-description">
                Ceza davalarında savunma, soruşturma aşamasında hukuki destek ve ceza hukuku 
                alanındaki tüm süreçlerde profesyonel hizmet.
              </p>
              <ul className="service-features">
                <li>Ceza Davalarında Savunma</li>
                <li>Soruşturma Aşamasında Hukuki Destek</li>
                <li>Temyiz ve İstinaf İşlemleri</li>
                <li>İcra ve İflas Suçları</li>
                <li>Beyaz Yaka Suçları</li>
              </ul>
            </div>
          </div>

          <div className="service-card main-service">
            <div className="service-header">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h3 className="service-title">Aile Hukuku</h3>
            </div>
            <div className="service-content">
              <p className="service-description">
                Boşanma, velayet, nafaka, mal rejimi ve aile içi anlaşmazlıklar konularında 
                hassas ve profesyonel yaklaşımla hizmet veriyoruz.
              </p>
              <ul className="service-features">
                <li>Boşanma Davaları ve Anlaşmalı Boşanma</li>
                <li>Velayet ve Kişisel İlişki Düzenlemesi</li>
                <li>Nafaka Davaları ve Takibi</li>
                <li>Mal Rejimi ve Paylaşım</li>
                <li>Evlat Edinme İşlemleri</li>
              </ul>
            </div>
          </div>

          <div className="service-card main-service">
            <div className="service-header">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 className="service-title">Tazminat Hukuku</h3>
            </div>
            <div className="service-content">
              <p className="service-description">
                Trafik kazaları, iş kazaları, malpraktis ve diğer tazminat davalarında 
                haklarınızın korunması için uzman savunma hizmeti.
              </p>
              <ul className="service-features">
                <li>Trafik Kazası Tazminat Davaları</li>
                <li>İş Kazası ve Meslek Hastalığı</li>
                <li>Malpraktis Davaları</li>
                <li>Manevi Tazminat Davaları</li>
                <li>Maddi Tazminat Hesaplamaları</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesMain;
