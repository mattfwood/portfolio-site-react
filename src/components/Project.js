import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Project = ({ project }) => {
  return (
    <Col xs={6}>
      <div className="project-card">
        <div className="project-header">
          {project.name.replace(/-/g, ' ')}
          <span className={`language-badge ${project.language}`}>
            {project.language}
          </span>
        </div>
        <div className="project-body">
          {project.description}
        </div>
      </div>
    </Col>
  );
};

export default Project;
