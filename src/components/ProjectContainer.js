import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Project from './Project';

class ProjectContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };
  }

  componentWillMount() {
    axios
      .get('https://api.github.com/users/mattfwood/repos')
      .then(response => {
        const projects = response.data.filter(project => project.fork === false && project.description)
        console.log(projects);
        this.setState({ projects });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Row>
        {this.state.projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </Row>
    );
  }
}

export default ProjectContainer;
