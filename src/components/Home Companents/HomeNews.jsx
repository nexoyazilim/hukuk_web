import React from 'react';
import '../../css/Home Css/HomeNews.css';

const HomeNews = () => {
  return (
    <section className="news">
      <div className="container">
        <h2 className="section-title">Duyurular & Yayınlar</h2>
        <div className="news-grid">
          <article className="news-card">
            <div className="news-image">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80" alt="Yapay Zeka" />
            </div>
            <div className="news-date">25 Eylül 2025</div>
            <h3 className="news-title">
              Büromuzda yapay zekâ platformu Legora'yı tüm çalışma alanlarımızda devreye aldık
            </h3>
            <p className="news-excerpt">
              Hukuk profesyonelleri için geliştirilen, alanında önde gelen yapay zekâ platformu...
            </p>
          </article>
          <article className="news-card">
            <div className="news-image">
              <img src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80" alt="Ödül" />
            </div>
            <div className="news-date">23 Eylül 2025</div>
            <h3 className="news-title">
              "Yılın Hukuk Bürosu – Türkiye" ödülüne layık görüldük
            </h3>
            <p className="news-excerpt">
              Benchmark Litigation Europe Awards 2025'te Türkiye'nin en prestijli ödülünü aldık.
            </p>
          </article>
          <article className="news-card">
            <div className="news-image">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80" alt="Danışmanlık" />
            </div>
            <div className="news-date">17 Eylül 2025</div>
            <h3 className="news-title">
              Ege Kimya'ya Venator Materials devralınması işlemlerinde danışmanlık
            </h3>
            <p className="news-excerpt">
              Sikatif iş kolunun ve Metal Oksit'in tüm paylarının devralınması sürecinde...
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HomeNews;
