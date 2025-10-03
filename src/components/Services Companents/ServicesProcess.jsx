import React from 'react';
import '../../css/Services Css/ServicesProcess.css';

const ServicesProcess = () => {
  return (
    <section className="process">
      <div className="container">
        <h2 className="section-title">Çalışma Sürecimiz</h2>
        <div className="process-steps">
          <div className="process-step-wrapper">
            <div className="step-number">1</div>
            <div className="process-step">
              <div className="step-image">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80" 
                  alt="İlk Görüşme" 
                />
              </div>
              <div className="step-content">
                <h3 className="step-title">İlk Görüşme</h3>
                <p className="step-description">
                  İlk görüşmemizde sorununuzu detaylı bir şekilde dinliyor, hukuki durumunuzu kapsamlı şekilde analiz ediyor ve size en uygun çözüm stratejisini belirliyoruz. Müvekkillerimizin ihtiyaçlarını anlamak ve onlara en iyi hizmeti sunmak için detaylı bir değerlendirme yapıyoruz.
                </p>
              </div>
            </div>
          </div>
          <div className="process-step-wrapper">
            <div className="step-number">2</div>
            <div className="process-step">
              <div className="step-image">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80" 
                  alt="Araştırma ve Hazırlık" 
                />
              </div>
              <div className="step-content">
                <h3 className="step-title">Araştırma ve Hazırlık</h3>
                <p className="step-description">
                  Davanızla ilgili tüm mevzuat ve içtihatları detaylı şekilde inceliyor, gerekli tüm belgeleri titizlikle topluyor ve dosyanızı eksiksiz bir şekilde hazırlıyoruz. Uzman ekibimiz her ayrıntıyı gözden kaçırmadan çalışmalarını sürdürüyor.
                </p>
              </div>
            </div>
          </div>
          <div className="process-step-wrapper">
            <div className="step-number">3</div>
            <div className="process-step">
              <div className="step-image">
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80" 
                  alt="Hukuki Süreç" 
                />
              </div>
              <div className="step-content">
                <h3 className="step-title">Hukuki Süreç</h3>
                <p className="step-description">
                  Dava sürecini profesyonel bir şekilde yönetiyor, mahkemede en güçlü savunmanızı yapıyor ve haklarınızı sonuna kadar koruyoruz. Deneyimli avukatlarımız, tüm hukuki süreç boyunca yanınızda olarak sizi en iyi şekilde temsil ediyor.
                </p>
              </div>
            </div>
          </div>
          <div className="process-step-wrapper">
            <div className="step-number">4</div>
            <div className="process-step">
              <div className="step-image">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80" 
                  alt="Takip ve Destek" 
                />
              </div>
              <div className="step-content">
                <h3 className="step-title">Takip ve Destek</h3>
                <p className="step-description">
                  Karar sonrası tüm süreçleri dikkatle takip ediyor, gerekli tüm işlemleri zamanında gerçekleştiriyoruz. Müvekkillerimize sürekli destek sunarak, her aşamada yanlarında olmayı ve sonuçların eksiksiz şekilde uygulanmasını sağlıyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesProcess;
