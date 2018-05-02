import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Hero = props => (
  <div className={`Hero ${props.animation ? 'active' : ''}`}>
    <Row middle="xs" className="no-margins">
      <Col xs={12}>
        <div className="hero-headline">
          I am a Web Developer specializing in React, Node and Single-Page
          Applications
        </div>
      </Col>
    </Row>
  </div>
);

Hero.propTypes = {
  animation: PropTypes.bool.isRequired,
};

export default Hero;
