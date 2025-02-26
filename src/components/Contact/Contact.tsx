import React from 'react';
import { EmailIcon, LinkedInIcon } from '../../assets';
import { ContactInfo } from '../../types';
import '../../styles/components/contact.css';

const Contact: React.FC = () => {
  const contactInfo: ContactInfo[] = [
    {
      icon: EmailIcon,
      text: "jafri.ar@northeastern.edu",
      link: "mailto:jafri.ar@northeastern.edu",
      type: "email"
    },
    {
      icon: LinkedInIcon,
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/arshjafri",
      type: "linkedin"
    }
  ];

  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        {contactInfo.map((info, index) => (
          <div key={index} className="contact-info-container">
            <img
              src={info.icon}
              alt={`${info.type} icon`}
              className={`icon contact-icon ${info.type === 'email' ? 'email-icon' : ''}`}
              loading="lazy"
            />
            <p>
              <a href={info.link}>{info.text}</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact; 