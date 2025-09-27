import React from 'react';
import '../../css/Home Css/HomeCTA.css';

const HomeCTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Hukuki Danışmanlığa İhtiyacınız mı Var?</h2>
          <p className="cta-subtitle">
            Uzman ekibimizle ücretsiz ön görüşme yapın ve hukuki sürecinizi planlayın.
          </p>
          <a href="/iletisim" className="btn btn-primary btn-large">Hemen İletişime Geç</a>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
