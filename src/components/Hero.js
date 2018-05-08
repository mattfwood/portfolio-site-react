// irBlack
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/styles/prism';
import { irBlack } from 'react-syntax-highlighter/styles/hljs';

const codeString = "import { About, Skills, BlogPosts } from 'matt-wood';";


const Hero = props => (
  <div className={`Hero ${props.animation ? 'active' : ''}`}>
    <Row bottom="xs" className="no-margins">
      {/* <Col xs={12}> */}
      <div className="hero-headline">
        <div className="code-section">
          <SyntaxHighlighter language="javascript">
            {codeString}
          </SyntaxHighlighter>
        </div>
        <div>Full-Stack Web Developer</div>
        <div className="hero-subhead">
          Specializing in <span className="hero-inline-light-blue">React, </span>
          <span className="hero-inline-yellow">NodeJS</span> and
          <span className="hero-inline-red"> Python</span>
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
