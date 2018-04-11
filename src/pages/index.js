import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Grid, Row, Col } from 'react-flexbox-grid';

import ProjectContainer from '../components/ProjectContainer';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import BlogSection from '../components/blog/BlogSection';

class IndexPage extends Component {
  render() {
    const posts = this.props.data.allContentfulPost.edges;
    console.log(posts);
    return (
      <Grid>
        <Hero />
        <AboutSection />
        <ProjectContainer />
        <BlogSection posts={posts}/>
        <Link to="/websocket-demo/">View Websocket Demo</Link>
      </Grid>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
query PageQuery {
  allContentfulPost(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          title
          
          body {
            id
            body
          }
        }
      }
    }
}
`;
