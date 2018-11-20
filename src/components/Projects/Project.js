import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import * as PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import LanguageBadge from '../LanguageBadge';

import SourceCodeIcon from '../../layouts/icons/source-code-icon.svg';

const propTypes = {
  project: PropTypes.objectOf(PropTypes.any).isRequired,
};

const Project = ({ project, gifs }) => {
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
          {project.highlights.map((highlight, index) => (
            <div key={index}>
-
              {highlight}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="Project">
      <Row center="xs">
        <Col xs={12}>
          <div className="project-section-header">
            <a href={project.demoLink} className="project-demo-link">
              <h3 className="project-name">
                {project.name.replace(/-/g, ' ')}
              </h3>
            </a>
            <a href={project.svn_url} className="project-title">
              <LazyLoad>
                <img
                  className="source-icon"
                  src={SourceCodeIcon}
                  alt="Github icon"
                />
              </LazyLoad>
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <div className="project-image-wrapper">
            <LazyLoad height={500}>
              <img
                src={gifs[project.name]}
                alt={`gif of ${project.name.replace(/-/g, ' ')}`}
              />
            </LazyLoad>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="project-wrapper">
            <div className="project-card">
              <div className="project-body">
                {project.description}
                {highlights()}
              </div>
              <div className="project-footer">
                {languages.map((language, index) => (
                  <LanguageBadge language={language} key={index} />
                ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

Project.propTypes = propTypes;

export default Project;
