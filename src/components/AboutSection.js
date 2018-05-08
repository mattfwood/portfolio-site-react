import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import LanguageBadge from './LanguageBadge';

const AboutSection = () => (
  <div className="about-section">
    <h2 className="section-header">
      <span role="img" aria-label="person surprised emoji">
        🙇‍{' '}
      </span>About
    </h2>
    <div className="about-body">
      <p>
        I am a self-taught, full-stack Developer from Dallas, Texas. I specialize in NodeJS, React,
        and building APIs for applications.
      </p>
      <p>
        I've created several full-stack web applications and built front-end for many more web apps.
        I’ve also developed NPM packages such as a Node CLI tools and a React boilerplate generator.
      </p>
      <p>
        When I’m not spinning up a new project, I spend much of my free time learning about the
        latest technology in web development and applying it to existing projects. When I think I
        understand a new idea thoroughly, I’ll usually make a blog post about it, too.
      </p>
      <p>
        I believe in creating interactive web apps that are responsive and intuitive, as well as
        writing clean, maintainable code that’s thoroughly tested.
      </p>
    </div>
    <h3>Skills</h3>
    <div className="about-skills">
      <Row>
        <Col xs={12} md={6} lg={4}>
          <div className="skill-group project-card">
            <div className="card-header">
              <h4>Front-end</h4>
            </div>
            <div className="project-body">
              <div>CSS3, Javascript / ES6, React, Vue</div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="skill-group project-card">
            <div className="card-header">
              <h4>Back-end</h4>
            </div>
            <div className="project-body">
              <div>NodeJS, ExpressJS, PostgreSQL, MongoDB</div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="skill-group project-card">
            <div className="card-header">
              <h4>Cloud and CMS</h4>
            </div>
            <div className="project-body">
              <div>Wordpress, Contentful, Firebase</div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="skill-group project-card">
            <div className="card-header">
              <h4>Native</h4>
            </div>
            <div className="project-body">
              <div>React Native, Electron</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default AboutSection;
