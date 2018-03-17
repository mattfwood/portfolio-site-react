import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LanguageBadge from './LanguageBadge';
import Link from 'gatsby-link';

const Project = ({ project }) => {
  return (
    <Col xs={6}>
      <a className="project-wrapper" href={project.svn_url}>
        <div className="project-card">
          <div className="project-header">
            {project.name.replace(/-/g, ' ')}
            <LanguageBadge language={project.language} />
          </div>
          <div className="project-body">{project.description}</div>
        </div>
      </a>
    </Col>
  );
};

export default Project;
