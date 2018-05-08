// irBlack
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Typist from 'react-typist';

const codeString = "import { About, Skills, BlogPosts } from 'matt-wood';";

class Hero extends Component {
  state = {
    windowWidth: 0,
  };

  componentDidMount() {
    this.setState({ windowWidth: window.innerWidth });
  }

  render() {
    const { windowWidth } = this.state;
    const { animation } = this.props;
    const code = () => {
      // on mobile, break code into multiple lines
      if (windowWidth < 768 && windowWidth !== 0) {
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

      if (windowWidth !== 0) {
        return <Typist>{codeString}</Typist>;
      }

      return null;
    };

    return (
      <div className={`Hero ${animation ? 'active' : ''}`}>
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
  }
}

Hero.propTypes = {
  animation: PropTypes.bool.isRequired,
};

export default Hero;
