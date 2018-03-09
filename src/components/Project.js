import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LanguageBadge from './LanguageBadge';

const Project = ({ project }) => {
  return (
    <Col xs={6}>
      <div className="project-card">
        <div className="project-header">
          {project.name.replace(/-/g, ' ')}
          <LanguageBadge language={project.language} />
        </div>
        <div className="project-body">{project.description}</div>
      </div>
    </Col>
  );
};

export default Project;
