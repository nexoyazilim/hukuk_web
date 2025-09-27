import React from 'react';
import '../../css/Services Css/ServicesCTA.css';

const ServicesCTA = () => {
  return (
    <section className="services-cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Hukuki Danışmanlığa İhtiyacınız mı Var?</h2>
          <p className="cta-subtitle">
            Uzman ekibimizle ücretsiz ön görüşme yapın ve size en uygun hizmeti belirleyelim.
          </p>
          <div className="cta-buttons">
            <a href="/iletisim" className="btn btn-primary">İletişime Geç</a>
            <a href="/ekibimiz" className="btn btn-secondary">Ekibimizi Tanıyın</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
