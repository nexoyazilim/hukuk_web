import React from 'react';
import '../../css/About Css/AboutTeam.css';

const AboutTeam = () => {
  return (
    <section className="about-team">
      <div className="container">
        <div className="team-header">
          <h2 className="team-title">Uzman Ekibimiz</h2>
          <p className="team-description">
            Farklı hukuk alanlarında uzmanlaşmış, deneyimli avukatlarımız ve danışmanlarımız, 
            müvekkillerimizin en karmaşık hukuki sorunlarına bile etkili çözümler sunmaktadır. 
            Ekibimiz, sürekli eğitim ve gelişim anlayışıyla kendini yenilemekte ve 
            hukuk alanındaki son gelişmeleri takip etmektedir.
          </p>
        </div>
        
        <div className="team-grid">
          <div className="team-card">
            <div className="lawyer-image">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80" 
                alt="Av. Mehmet Kaya" 
              />
            </div>
            <h3 className="lawyer-name">Av. Mehmet Kaya</h3>
            <p className="lawyer-title">Kurucu Ortak / Baş Avukat</p>
          </div>

          <div className="team-card">
            <div className="lawyer-image">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" 
                alt="Av. Ayşe Demir" 
              />
            </div>
            <h3 className="lawyer-name">Av. Ayşe Demir</h3>
            <p className="lawyer-title">Ortak Avukat</p>
          </div>

          <div className="team-card">
            <div className="lawyer-image">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" 
                alt="Av. Ahmet Yılmaz" 
              />
            </div>
            <h3 className="lawyer-name">Av. Ahmet Yılmaz</h3>
            <p className="lawyer-title">Kıdemli Avukat</p>
          </div>

          <div className="team-card">
            <div className="lawyer-image">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" 
                alt="Av. Zeynep Şahin" 
              />
            </div>
            <h3 className="lawyer-name">Av. Zeynep Şahin</h3>
            <p className="lawyer-title">Kıdemli Avukat</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
