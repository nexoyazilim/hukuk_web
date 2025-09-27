import React from 'react';
import '../../css/Services Css/ServicesProcess.css';

const ServicesProcess = () => {
  return (
    <section className="process">
      <div className="container">
        <h2 className="section-title">Çalışma Sürecimiz</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3 className="step-title">İlk Görüşme</h3>
            <p className="step-description">
              Sorununuzu dinliyor, hukuki durumu analiz ediyor ve size en uygun stratejiyi belirliyoruz.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3 className="step-title">Araştırma ve Hazırlık</h3>
            <p className="step-description">
              Konuyla ilgili mevzuatı inceliyor, gerekli belgeleri topluyor ve dosyayı hazırlıyoruz.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3 className="step-title">Hukuki Süreç</h3>
            <p className="step-description">
              Dava sürecini yönetiyor, mahkemede savunmanızı yapıyor ve sizi temsil ediyoruz.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3 className="step-title">Takip ve Destek</h3>
            <p className="step-description">
              Karar sonrası süreçleri takip ediyor, gerekli işlemleri gerçekleştiriyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesProcess;
