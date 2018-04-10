import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Link from 'gatsby-link';

import Project from './Project';
import projects from './projects';

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
        <h2 className="section-header">🏗️ Projects️</h2>
        {
          projects.map((project, index) => (
            <Project project={project} key={index} />
          ))
        }
        {this.state.projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    );
  }
}

export default ProjectContainer;
