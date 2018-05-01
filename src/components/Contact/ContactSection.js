import React from 'react';

const ContactSection = () => (
  <div className="contact-section">
    <h2 className="section-header">
      <span role="img" aria-label="megaphone emoji">
        📣{' '}
      </span>Contact
    </h2>
    <div className="contact-body">
      <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <div className="form-row contact-info-row">
          <input className="form-name" type="text" name="name" placeholder="Name" />
          <input className="form-email" type="email" name="email" placeholder="Email" />
        </div>
        <div className="form-row">
          <textarea name="message" placeholder="Message" />
        </div>
        <div className="form-row">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  </div>
);

export default ContactSection;
