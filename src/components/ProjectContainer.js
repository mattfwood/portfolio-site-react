import React, { Component } from 'react'
import axios from 'axios'

import Project from './Project'
import projects from './projects'

import mealPrepSunday from '../layouts/images/meal-prep-sunday-demo.gif'
import portfolioSite from '../layouts/images/portfolio-site-demo.gif'

const gifs = {
  'meal-prep-sunday': mealPrepSunday,
  'portfolio-site': portfolioSite,
}

class ProjectContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      githubProjects: [],
    }
  }

  componentWillMount() {
    // axios
    //   .get('https://api.github.com/users/mattfwood/repos')
    //   .then((response) => {
    //     // only get projects that aren't forked from other repos and have a description
    //     const githubProjects = response.data.filter(
    //       project => project.fork === false && project.description,
    //     );
    //     this.setState({ githubProjects });
    //   })
    //   .catch((error) => { throw new Error(error); });
  }

  render() {
    // console.log(this.props);
    return (
      <div className="project-section">
        <h2 className="section-header">
          <span role="img" aria-label="construction crane emoji">
            🏗️
          </span>
          Projects
        </h2>
        {projects.map((project, index) => (
          <Project gifs={gifs} project={project} key={index} />
        ))}
      </div>
    )
  }
}

// export const pageQuery = graphql`{
//   query ProjectQuery {
//     allFile(filter: { extension: { eq: "gif" } }) {
//       edges {
//         node {
//           publicURL
//         }
//       }
//     }
//   }
// }`;

export default ProjectContainer
