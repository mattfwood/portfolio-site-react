import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Hero = props => (
  <div className={`Hero ${props.animation ? 'active' : ''}`}>
    <Row bottom="xs" className="no-margins">
      <Col xs={12}>
        <div className="hero-headline">
          {/* <div>I am a Web Developer</div> */}
          {/* <div>specializing in React, Node and Single-Page Applications</div> */}
          {/* <div>Matt Wood</div> */}
          <div>Full-Stack Web Developer</div>
          <div className="hero-subhead">Specializing in React, NodeJS and Python</div>
        </div>
      </Col>
    </Row>
  </div>
);

Hero.propTypes = {
  animation: PropTypes.bool.isRequired,
};

export default Hero;
