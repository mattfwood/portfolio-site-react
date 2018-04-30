import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="Footer">
      <Row>
        {/* DETAILS */}
        <Col md={6}>
          <div>Matt Wood {year}</div>
        </Col>

        {/* CONTACT INFO */}

        {/* LINKS TO GITHUB ETC */}
        <Col md={6}>
          <h4>Links</h4>
          <div>
            <a href="https://github.com/user/mattfwood">Github</a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/mattfwood/">LinkedIn</a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
