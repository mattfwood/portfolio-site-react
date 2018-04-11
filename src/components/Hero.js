import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

const Hero = () => (
  <div className="Hero">
    <Row middle="xs">
      <Col>
        <div className="hero-headline">
              Matt is a Web Developer specializing in React, Node and
              Single-Page Applications
        </div>
      </Col>
    </Row>
  </div>
);

export default Hero;
