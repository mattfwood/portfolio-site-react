import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

const ContactSection = () => (
  <div className="contact-section">
    <h2 className="section-header">
      <span role="img" aria-label="megaphone emoji">
        📣{' '}
      </span>Contact
    </h2>
    <div className="contact-body">
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="contact-form" value="contact" />
        <Row className="form-row contact-info-row">
          <Col xs={12} md={6}>
            <input className="form-name" type="text" name="name" placeholder="Name" />
          </Col>
          <Col xs={12} md={6}>
            <input className="form-email" type="email" name="email" placeholder="Email" />
          </Col>
        </Row>
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
