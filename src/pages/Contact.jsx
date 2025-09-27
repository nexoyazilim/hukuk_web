import React from 'react';
import ContactHero from '../components/Contact Companents/ContactHero';
import ContactInfo from '../components/Contact Companents/ContactInfo';
import ContactForm from '../components/Contact Companents/ContactForm';
import ContactMap from '../components/Contact Companents/ContactMap';

const Contact = () => {
  return (
    <div className="contact">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </div>
  );
};

export default Contact;
