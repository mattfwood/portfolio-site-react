import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import GithubIcon from '../layouts/icons/github-icon.svg';
import LinkedInIcon from '../layouts/icons/linkedin-icon.svg';


const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="Footer">
      <Row>
        {/* DETAILS */}
        <Col md={12}>
          <div>Matt Wood {year}</div>
          <div className="links-column">
            <a href="https://github.com/user/mattfwood">
              <img src={GithubIcon} className="footer-icon" />
            </a>
            <a href="https://www.linkedin.com/in/mattfwood/">
              <img src={LinkedInIcon} className="footer-icon" />
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
