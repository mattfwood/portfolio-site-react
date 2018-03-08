import React, { Component } from 'react';
import axios from 'axios';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };
  }

  componentWillMount() {
    axios.get('https://api.github.com/users/mattfwood/repos')
      .then(response => {
        console.log(response.data);
        this.setState({ projects: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <ul>
        {
          this.state.projects.map((project, index) =>
            <li key={index}>{project.name}</li>
          )
        }
      </ul>
    );
  }
}

export default Projects;
