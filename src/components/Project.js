import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LanguageBadge from './LanguageBadge';
import Link from 'gatsby-link';

const Project = ({ project }) => {
  return (
    <Col xs={6}>
      <div className="project-card">
        <a href={project.svn_url}>
          <div className="project-header">
            {project.name.replace(/-/g, ' ')}
            <LanguageBadge language={project.language} />
          </div>
        </a>
        <div className="project-body">{project.description}</div>
      </div>
    </Col>
  );
};

export default Project;
