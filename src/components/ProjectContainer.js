import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Link from 'gatsby-link';

import Project from './Project';

class ProjectContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  componentWillMount() {
    axios
      .get('https://api.github.com/users/mattfwood/repos')
      .then(response => {
        // only get projects that aren't forked from other repos and have a description
        const projects = response.data.filter(
          project => project.fork === false && project.description
        );
        console.log(projects);
        this.setState({ projects });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1 className="section-header">🏗️ Projects️</h1>
        <Row>
          {this.state.projects.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </Row>
      </div>
    );
  }
}

export default ProjectContainer;
