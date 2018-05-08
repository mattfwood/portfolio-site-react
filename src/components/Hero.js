// irBlack
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Typist from 'react-typist';

const codeString = "import { About, Skills, BlogPosts } from 'matt-wood';";

const code = () => {
  // on mobile, break code into multiple lines
  if (window.innerWidth < 768) {
    return (
      <Typist>
        import {'{'}
        <Typist.Delay ms={200} />
        <br />
        {'  '}About,
        <Typist.Delay ms={200} />
        <br />
        {'  '}Skills,
        <Typist.Delay ms={200} />
        <br />
        {'  '}BlogPosts,
        <Typist.Delay ms={200} />
        <br />
        {'}'} from 'matt-wood'
      </Typist>
    );
  }

  return <Typist>{codeString}</Typist>;
};

const Hero = props => (
  <div className={`Hero ${props.animation ? 'active' : ''}`}>
    <Row bottom="xs" className="no-margins">
      {/* <Col xs={12}> */}
      <div className="hero-headline">
        <div className="code-section">{code()}</div>
        <div>Full-Stack Web Developer</div>
        <div className="hero-subhead">
          Specializing in <span className="hero-inline-light-blue">React, </span>
          <span className="hero-inline-green">NodeJS</span> and
          <span className="hero-inline-yellow"> Python</span>
        </div>
      </div>
      {/* </Col> */}
    </Row>
  </div>
);

Hero.propTypes = {
  animation: PropTypes.bool.isRequired,
};

export default Hero;
