import React from 'react';
import Link from 'gatsby-link';
import { Grid, Row, Col } from 'react-flexbox-grid';

import ProjectContainer from '../components/ProjectContainer';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import BlogSection from '../components/blog/BlogSection';

const IndexPage = () => (
  <Grid>
    <Hero />
    <AboutSection />
    <ProjectContainer />
    <BlogSection />
    <Link to="/websocket-demo/">View Websocket Demo</Link>
  </Grid>
);

export default IndexPage;
