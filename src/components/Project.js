import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LanguageBadge from './LanguageBadge';
import Link from 'gatsby-link';

const Project = ({ project }) => {
  let languages;

  if (!Array.isArray(project.language)) {
    languages = Array(project.language);
  } else {
    languages = project.language;
  }

  const highlights = () => {
    if (project.highlights) {
      return (
        <div className="project-highlights">
          {
            project.highlights.map((highlight, index) => (
              <div key={index}>
                - {highlight}
              </div>
            ))
          }
        </div>
      )
    }
    return null;
  }

  return (
    <div className="Project">
      <Row center="xs">
        <Col xs={12}>
          <a href={project.svn_url} className="project-title">
            <h3>{project.name.replace(/-/g, ' ')}</h3>
          </a>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          (Screenshot Here)
        </Col>
        <Col xs={12} md={6}>
          <a className="project-wrapper">
            <div className="project-card">
              <div className="project-body">
                {project.description}
                {highlights()}
              </div>
              <div className="project-footer">
                {
                 languages.map((language, index) => (
                    <LanguageBadge language={language} key={index} />
                  ))
                }
              </div>
            </div>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Project;
