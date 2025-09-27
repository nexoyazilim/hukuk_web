import React, { useState } from 'react';
import '../../css/Contact Css/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.');
  };

  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="form-container">
          <div className="form-header">
            <h2 className="form-title">Bizimle İletişime Geçin</h2>
            <p className="form-subtitle">
              Hukuki sorularınız için formu doldurun, uzman ekibimiz size en kısa sürede dönüş yapacaktır.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Ad Soyad *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">E-posta *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="service" className="form-label">Hizmet Alanı</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Hizmet seçiniz</option>
                  <option value="ticaret">Ticaret Hukuku</option>
                  <option value="ceza">Ceza Hukuku</option>
                  <option value="aile">Aile Hukuku</option>
                  <option value="tazminat">Tazminat Hukuku</option>
                  <option value="gayrimenkul">Gayrimenkul Hukuku</option>
                  <option value="is">İş Hukuku</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Konu *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Mesajınız *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows="6"
                required
              ></textarea>
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span className="checkmark"></span>
                <span className="checkbox-text">
                  <a href="#kvkk" className="privacy-link">Kişisel Verilerin Korunması</a> 
                  hakkındaki aydınlatma metnini okudum ve kabul ediyorum.
                </span>
              </label>
            </div>

            <button type="submit" className="submit-btn">
              <span>Mesajı Gönder</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22,2 15,22 11,13 2,9 22,2"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
