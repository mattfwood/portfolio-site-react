import React from 'react';
import Link from 'gatsby-link';
import * as PropTypes from 'prop-types';
import { Grid } from 'react-flexbox-grid';

import ProjectContainer from '../components/ProjectContainer';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import BlogSection from '../components/blog/BlogSection';

const propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

const IndexPage = (props) => {
  const posts = props.data.allContentfulPost.edges;
  return (
    <Grid>
      <Hero />
      <AboutSection />
      <ProjectContainer />
      <BlogSection posts={posts} />
      <Link to="/websocket-demo/">View Websocket Demo</Link>
    </Grid>
  );
};

IndexPage.propTypes = propTypes;

export default IndexPage;

export const pageQuery = graphql`
  query PageQuery {
    allContentfulPost {
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
