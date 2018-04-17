import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

const Hero = props => (
  <div className={`Hero ${props.animation ? 'active' : ''}`}>
    <Row middle="xs">
      <Col>
        <div className="hero-headline">
          I am a Web Developer specializing in React, Node and
              Single-Page Applications
        </div>
      </Col>
    </Row>
    <div className="hero-animation hero-top" />
    <div className="hero-animation hero-right" />
    <div className="hero-animation hero-bottom" />
    <div className="hero-animation hero-left" />
  </div>
);

export default Hero;
