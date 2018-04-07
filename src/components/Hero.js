import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Hero extends Component {
  render() {
    return (
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
  }
}

export default Hero;
