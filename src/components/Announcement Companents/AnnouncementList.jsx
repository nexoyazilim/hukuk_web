import React, { useState } from 'react';
import '../../css/Announcement Css/AnnouncementList.css';

const AnnouncementList = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const announcements = [
    {
      id: 1,
      date: '25 Eylül 2025',
      title: 'Paksoy\'da, hukuk profesyonelleri için geliştirilen, alanında önde gelen yapay zekâ platformu Legora\'yı tüm çalışma alanlarımızda devreye aldık',
      excerpt: 'Hukuk profesyonelleri için geliştirilen, alanında önde gelen yapay zekâ platformu Legora\'yı tüm çalışma alanlarımızda devreye aldık. Bu platform sayesinde müvekkillerimize daha hızlı ve etkili hizmet sunabiliyoruz.',
      fullContent: 'Hukuk profesyonelleri için geliştirilen, alanında önde gelen yapay zekâ platformu Legora\'yı tüm çalışma alanlarımızda devreye aldık. Bu yenilikçi platform, yapay zeka teknolojisini hukuk alanına entegre ederek müvekkillerimize daha hızlı, etkili ve kapsamlı hizmet sunmamızı sağlıyor.\n\nLegora platformu, hukuki araştırma, doküman analizi ve içtihat taraması gibi süreçleri otomatikleştirerek avukatlarımızın daha stratejik konulara odaklanmasını sağlıyor. Ayrıca, veri güvenliği ve gizlilik standartlarına tam uyum göstererek müvekkil bilgilerinin korunmasını garanti altına alıyor. Platform, makine öğrenimi algoritmaları kullanarak büyük miktarda hukuki verinin analizini dakikalar içinde gerçekleştiriyor ve en ilgili içtihatlara ulaşmamızı sağlıyor.\n\nDijital dönüşüm stratejimizin önemli bir parçası olan bu yatırım, müvekkillerimize daha kaliteli ve hızlı hukuki danışmanlık hizmeti sunma taahhüdümüzü güçlendiriyor. Legora\'nın sunduğu yapay zeka destekli özellikler sayesinde, karmaşık hukuki sorunlara daha etkili çözümler üretebiliyor ve müvekkillerimize zamandan tasarruf sağlıyoruz.\n\nAyrıca platform, sürekli güncellenen mevzuat değişikliklerini anlık olarak takip ederek, ekibimizin güncel bilgilere her zaman erişimini garanti altına alıyor. Bu teknolojik altyapı, hukuk sektöründe dijital dönüşümün öncülerinden biri olmamızı sağlıyor.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
      tags: ['Teknoloji', 'İnovasyon']
    },
    {
      id: 2,
      date: '23 Eylül 2025',
      title: 'Paksoy, Benchmark Litigation Europe Awards 2025\'te "Yılın Hukuk Bürosu – Türkiye" ödülüne layık görüldü',
      excerpt: 'Benchmark Litigation Europe Awards 2025\'te Türkiye\'nin en prestijli ödülünü aldık. Bu başarı, ekibimizin profesyonelliği ve müvekkillerimize sunduğumuz kaliteli hizmetin bir göstergesidir.',
      fullContent: 'Benchmark Litigation Europe Awards 2025\'te "Yılın Hukuk Bürosu – Türkiye" ödülüne layık görüldük. Bu prestijli ödül, hukuk sektöründeki mükemmellik standartlarımızı ve müvekkil odaklı yaklaşımımızı tescil ediyor. Türkiye\'nin en saygın hukuk büroları arasında bu onura layık görülmek, yıllar süren özverili çalışmanın ve kalite odaklı hizmet anlayışımızın bir meyvesidir.\n\nBenchmark Litigation, dünya genelinde hukuk bürolarını değerlendiren ve sektörün en saygın ödüllerinden birini veren bağımsız bir kuruluştur. Bu ödül, sadece başarılı davalarımızı değil, aynı zamanda etik değerlerimize bağlılığımızı ve sektöre kattığımız katma değeri de tanıyor. Değerlendirme süreci, müvekkil memnuniyeti, dava başarı oranları, etik standartlar ve sektöre katkı gibi birçok kriteri içermektedir.\n\nBu ödülü kazanmamızda, her biri kendi alanında uzman olan 120\'den fazla avukatımızın bilgi birikimi ve deneyimi büyük rol oynadı. Ekibimiz, her müvekkile özel çözümler üreterek ve en yüksek kalite standartlarını koruyarak bu başarıyı elde etti. Özellikle ticaret hukuku, şirketler hukuku ve uluslararası tahkim alanlarındaki performansımız, jürinin dikkatini çekti.\n\nEkibimizin özverili çalışması, müvekkillerimizin güveni ve sürekli gelişim anlayışımız sayesinde bu onura layık görüldük. Bu başarıyı, bizlere güvenen tüm müvekkillerimiz ve değerli ekip üyelerimizle paylaşmanın gururunu yaşıyoruz. Önümüzdeki dönemde de aynı kalite ve profesyonellik anlayışıyla hizmet vermeye devam edeceğiz.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80',
      tags: ['Ödül', 'Başarı']
    },
    {
      id: 3,
      date: '17 Eylül 2025',
      title: 'Paksoy, Ege Kimya\'ya Venator Materials\'ın sikatif iş kolunun ve Metal Oksit\'in tüm paylarının devralınması işlemlerinde danışmanlık sağladı',
      excerpt: 'Ege Kimya\'nın Venator Materials\'dan sikatif iş kolunun ve Metal Oksit\'in tüm paylarının devralınması işlemlerinde hukuki danışmanlık sağladık. Bu büyük ölçekli işlemde müvekkilimizin başarıyla tamamlanmasına katkıda bulunduk.',
      fullContent: 'Ege Kimya\'ya, Venator Materials\'ın sikatif iş kolunun ve Metal Oksit\'in tüm paylarının devralınması işlemlerinde kapsamlı hukuki danışmanlık sağladık. Bu stratejik devralma işlemi, Ege Kimya\'nın sektördeki konumunu güçlendiren önemli bir adım oldu ve şirketin uluslararası pazarlardaki varlığını artırmasına katkıda bulundu.\n\nİşlem sürecinde, detaylı due diligence çalışmaları, sözleşme müzakereleri, rekabet hukuku uyum süreçleri ve kapanış işlemlerinde aktif rol oynadık. Uluslararası boyutu olan bu işlemde, çeşitli ülkelerin hukuki düzenlemelerine uyum sağlanması ve karmaşık kurumsal yapıların çözümlenmesi gerekliydi. Ekibimiz, finansal, ticari ve operasyonel tüm yönleri titizlikle inceleyerek risk analizleri yaptı.\n\nDevralma sürecinde, Rekabet Kurumu başta olmak üzere ilgili tüm düzenleyici otoritelerle koordinasyonu sağladık. Ayrıca, çalışan hakları, çevre mevzuatı ve fikri mülkiyet konularında da kapsamlı incelemeler gerçekleştirdik. İşlemin her aşamasında müvekkilimize stratejik danışmanlık sunarak, potansiyel risklerin minimize edilmesini sağladık.\n\nMüvekkilimizin çıkarlarını en üst düzeyde koruyarak, işlemin sorunsuz ve başarılı bir şekilde tamamlanmasını sağladık. Bu devralma, Türkiye\'nin kimya sektöründe gerçekleşen en önemli işlemlerden biri olarak kayıtlara geçti.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      tags: ['Ticaret Hukuku', 'Devralma']
    },
    {
      id: 4,
      date: '9 Eylül 2025',
      title: 'Paksoy, Borsa İstanbul\'da işlem gören bir Güriş Holding grup şirketi olan Parsan\'a, Omtaş ile birleşme sürecinde danışmanlık sağladı',
      excerpt: 'Parsan\'ın Omtaş ile birleşme sürecinde hukuki danışmanlık sağladık. Bu süreçte müvekkilimizin tüm hukuki ihtiyaçlarını karşıladık ve başarılı bir birleşme gerçekleştirilmesine katkıda bulunduk.',
      fullContent: 'Borsa İstanbul\'da işlem gören Güriş Holding grup şirketi Parsan\'a, Omtaş ile birleşme sürecinde kapsamlı hukuki danışmanlık hizmeti sunduk. Bu işlem, Türkiye\'nin önde gelen şirketlerinden birinin büyüme stratejisinin önemli bir parçasıydı ve sektördeki konsolidasyon hareketlerinin önemli bir örneğini oluşturdu.\n\nBirleşme sürecinde, Sermaye Piyasası Kurulu düzenlemelerine uyum, pay sahiplerinin haklarının korunması, finansal yapının optimize edilmesi ve tüm yasal prosedürlerin eksiksiz tamamlanması konularında danışmanlık verdik. Halka açık şirketlerin birleşme süreçleri, özel şirketlere göre çok daha katı düzenlemelere tabidir ve tüm kamuyu aydınlatma yükümlülüklerinin yerine getirilmesi gerekmektedir.\n\nİşlem sürecinde, genel kurul toplantılarının organizasyonu, bağımsız denetim raporlarının hazırlanması, değerleme çalışmaları ve pay değişim oranlarının belirlenmesi gibi kritik aşamalarda müvekkilimize rehberlik ettik. Ayrıca, azınlık pay sahiplerinin haklarının korunması için gerekli tüm önlemlerin alınmasını sağladık.\n\nHalka açık şirketlerin birleşme süreçlerindeki deneyimimiz ve uzmanlığımız sayesinde, işlemin tüm paydaşlar için en avantajlı şekilde gerçekleştirilmesini sağladık. Sermaye piyasası mevzuatının karmaşık yapısında, müvekkilimizin tüm hukuki yükümlülüklerini zamanında ve eksiksiz yerine getirmesini temin ettik.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
      tags: ['Birleşme', 'Şirketler Hukuku']
    },
    {
      id: 5,
      date: '3 Eylül 2025',
      title: 'Avrasya Bağlantısında Bir Dönüm Noktası: Orta Koridor\'un Stratejik Yükselişi ve Türkiye\'nin Jeopolitik Rolü',
      excerpt: 'Orta Koridor\'un stratejik öneminin artması ve Türkiye\'nin bu süreçteki jeopolitik rolü hakkında detaylı analizimizi paylaşıyoruz. Bu gelişmelerin hukuki boyutları ve etkileri üzerine görüşlerimizi içeren makalemiz yayınlandı.',
      fullContent: 'Avrasya kıtasını birleştiren Orta Koridor\'un stratejik öneminin artması ve Türkiye\'nin bu süreçteki jeopolitik rolü üzerine kapsamlı bir analiz yaptık. Bu çalışmamız, bölgesel ve uluslararası ticaret hukukunun gelişen dinamiklerini inceliyor ve Türkiye\'nin ticaret merkezi olma potansiyelini değerlendiriyor.\n\nOrta Koridor, Çin\'den Avrupa\'ya uzanan alternatif bir ticaret rotası olarak son yıllarda büyük önem kazandı. Jeopolitik gerginliklerin artması ve küresel tedarik zincirlerinin çeşitlenme ihtiyacı, bu koridorun önemini daha da artırdı. Türkiye\'nin bu koridordaki stratejik konumu, ülkemizi önemli bir lojistik ve ticaret merkezi haline getiriyor.\n\nMakalemizde, bu gelişmelerin hukuki altyapısı, uluslararası anlaşmalar, ticaret düzenlemeleri ve Türkiye\'nin bu süreçte üstlendiği rol detaylı olarak ele alınıyor. Özellikle gümrük mevzuatı, uluslararası taşıma sözleşmeleri, altyapı yatırımlarının hukuki çerçevesi ve bölgesel işbirliği anlaşmaları üzerinde duruyoruz.\n\nAyrıca, gelecek dönemde ortaya çıkabilecek hukuki fırsatlar ve zorluklar da değerlendiriliyor. Lojistik merkezlerin kurulması, serbest ticaret bölgeleri, transit ticaret düzenlemeleri ve uluslararası tahkim mekanizmaları gibi konular, analizimizin önemli başlıkları arasında yer alıyor. Türkiye\'nin bu süreçte atacağı adımların, ülke ekonomisine ve hukuk pratiğine etkilerini de ele alıyoruz.',
      image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80',
      tags: ['Analiz', 'Uluslararası Hukuk']
    },
    {
      id: 6,
      date: '25 Ağustos 2025',
      title: 'Paksoy, Paribu\'ya Boxbilet\'in devralınması işleminde hukuki danışmanlık sağladı',
      excerpt: 'Paribu\'nun Boxbilet\'i devralma işleminde hukuki danışmanlık sağladık. Bu işlemde müvekkilimizin tüm hukuki süreçlerini yönettik ve başarılı bir devralma gerçekleştirilmesine katkıda bulunduk.',
      fullContent: 'Türkiye\'nin önde gelen kripto para borsası Paribu\'ya, etkinlik bileti platformu Boxbilet\'in devralınması işleminde kapsamlı hukuki danışmanlık sağladık. Bu işlem, kripto para ve fintech sektörlerinin geleneksel hizmet sektörleriyle entegrasyonuna örnek oluşturuyor ve dijital ekonominin geleceğine dair önemli ipuçları veriyor.\n\nDevralma sürecinde, teknoloji şirketlerine özgü detaylı due diligence süreçleri, fikri mülkiyet haklarının transferi, veri güvenliği ve gizlilik düzenlemelerine uyum, sözleşme müzakereleri ve düzenleyici kurumlarla koordinasyon gibi konularda danışmanlık verdik. Özellikle KVKK (Kişisel Verilerin Korunması Kanunu) uyumu ve müşteri verilerinin transferi konularında özel bir özen gösterdik.\n\nTeknoloji şirketlerinin devralınmasında, geleneksel due diligence süreçlerine ek olarak, yazılım altyapısının incelenmesi, API entegrasyonları, kullanıcı sözleşmeleri, platform kullanım koşulları ve dijital varlıkların değerlemesi gibi spesifik konular da ele alındı. Ekibimiz, hem kripto para mevzuatı hem de etkinlik sektörü düzenlemeleri konusunda derinlemesine analizler yaptı.\n\nDijital ekonomi ve teknoloji sektöründeki derin bilgimiz ve deneyimimiz sayesinde, işlemin tüm aşamalarında müvekkilimize stratejik rehberlik sağladık ve başarılı bir devralma sürecinin tamamlanmasına katkıda bulunduk. Bu işlem, fintech sektöründe gerçekleşen en ilgi çekici devralma işlemlerinden biri oldu.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      tags: ['Devralma', 'Teknoloji']
    }
  ];

  const openModal = (announcement) => {
    setSelectedAnnouncement(announcement);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedAnnouncement(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="announcement-list">
      <div className="container">
        <div className="announcements-grid">
          {announcements.map((announcement, index) => (
            <article 
              key={announcement.id} 
              className="announcement-card"
              onClick={() => openModal(announcement)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="announcement-image">
                <img src={announcement.image} alt={announcement.title} />
              </div>
              <div className="announcement-content">
                <div className="announcement-date">{announcement.date}</div>
                <h3 className="announcement-title">{announcement.title}</h3>
                <p className="announcement-excerpt">{announcement.excerpt}</p>
                <div className="announcement-tags">
                  {announcement.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="read-more-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedAnnouncement && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            <div className="modal-image">
              <img src={selectedAnnouncement.image} alt={selectedAnnouncement.title} />
            </div>
            <div className="modal-body">
              <div className="modal-date">{selectedAnnouncement.date}</div>
              <h2 className="modal-title">{selectedAnnouncement.title}</h2>
              <div className="modal-tags">
                {selectedAnnouncement.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
              <div className="modal-text">
                {selectedAnnouncement.fullContent.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AnnouncementList;
