import React from 'react';
import '../../css/Announcement Css/AnnouncementList.css';

const AnnouncementList = () => {
  return (
    <section className="announcement-list">
      <div className="container">
        <div className="announcements-grid">
          <article className="announcement-card">
            <div className="announcement-date">25 Eylül 2025</div>
            <h3 className="announcement-title">
              Paksoy'da, hukuk profesyonelleri için geliştirilen, alanında önde gelen yapay zekâ platformu Legora'yı tüm çalışma alanlarımızda devreye aldık
            </h3>
            <p className="announcement-excerpt">
              Hukuk profesyonelleri için geliştirilen, alanında önde gelen yapay zekâ platformu Legora'yı tüm çalışma alanlarımızda devreye aldık. Bu platform sayesinde müvekkillerimize daha hızlı ve etkili hizmet sunabiliyoruz.
            </p>
            <div className="announcement-tags">
              <span className="tag">Teknoloji</span>
              <span className="tag">İnovasyon</span>
            </div>
          </article>

          <article className="announcement-card">
            <div className="announcement-date">23 Eylül 2025</div>
            <h3 className="announcement-title">
              Paksoy, Benchmark Litigation Europe Awards 2025'te "Yılın Hukuk Bürosu – Türkiye" ödülüne layık görüldü
            </h3>
            <p className="announcement-excerpt">
              Benchmark Litigation Europe Awards 2025'te Türkiye'nin en prestijli ödülünü aldık. Bu başarı, ekibimizin profesyonelliği ve müvekkillerimize sunduğumuz kaliteli hizmetin bir göstergesidir.
            </p>
            <div className="announcement-tags">
              <span className="tag">Ödül</span>
              <span className="tag">Başarı</span>
            </div>
          </article>

          <article className="announcement-card">
            <div className="announcement-date">17 Eylül 2025</div>
            <h3 className="announcement-title">
              Paksoy, Ege Kimya'ya Venator Materials'ın sikatif iş kolunun ve Metal Oksit'in tüm paylarının devralınması işlemlerinde danışmanlık sağladı
            </h3>
            <p className="announcement-excerpt">
              Ege Kimya'nın Venator Materials'dan sikatif iş kolunun ve Metal Oksit'in tüm paylarının devralınması işlemlerinde hukuki danışmanlık sağladık. Bu büyük ölçekli işlemde müvekkilimizin başarıyla tamamlanmasına katkıda bulunduk.
            </p>
            <div className="announcement-tags">
              <span className="tag">Ticaret Hukuku</span>
              <span className="tag">Devralma</span>
            </div>
          </article>

          <article className="announcement-card">
            <div className="announcement-date">9 Eylül 2025</div>
            <h3 className="announcement-title">
              Paksoy, Borsa İstanbul'da işlem gören bir Güriş Holding grup şirketi olan Parsan'a, Omtaş ile birleşme sürecinde danışmanlık sağladı
            </h3>
            <p className="announcement-excerpt">
              Parsan'ın Omtaş ile birleşme sürecinde hukuki danışmanlık sağladık. Bu süreçte müvekkilimizin tüm hukuki ihtiyaçlarını karşıladık ve başarılı bir birleşme gerçekleştirilmesine katkıda bulunduk.
            </p>
            <div className="announcement-tags">
              <span className="tag">Birleşme</span>
              <span className="tag">Şirketler Hukuku</span>
            </div>
          </article>

          <article className="announcement-card">
            <div className="announcement-date">3 Eylül 2025</div>
            <h3 className="announcement-title">
              Avrasya Bağlantısında Bir Dönüm Noktası: Orta Koridor'un Stratejik Yükselişi ve Türkiye'nin Jeopolitik Rolü
            </h3>
            <p className="announcement-excerpt">
              Orta Koridor'un stratejik öneminin artması ve Türkiye'nin bu süreçteki jeopolitik rolü hakkında detaylı analizimizi paylaşıyoruz. Bu gelişmelerin hukuki boyutları ve etkileri üzerine görüşlerimizi içeren makalemiz yayınlandı.
            </p>
            <div className="announcement-tags">
              <span className="tag">Analiz</span>
              <span className="tag">Uluslararası Hukuk</span>
            </div>
          </article>

          <article className="announcement-card">
            <div className="announcement-date">25 Ağustos 2025</div>
            <h3 className="announcement-title">
              Paksoy, Paribu'ya Boxbilet'in devralınması işleminde hukuki danışmanlık sağladı
            </h3>
            <p className="announcement-excerpt">
              Paribu'nun Boxbilet'i devralma işleminde hukuki danışmanlık sağladık. Bu işlemde müvekkilimizin tüm hukuki süreçlerini yönettik ve başarılı bir devralma gerçekleştirilmesine katkıda bulunduk.
            </p>
            <div className="announcement-tags">
              <span className="tag">Devralma</span>
              <span className="tag">Teknoloji</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementList;
