import React from 'react';
import Link from 'gatsby-link';
import { Grid, Row, Col } from 'react-flexbox-grid';

import ProjectContainer from '../components/ProjectContainer';
import Hero from '../components/Hero';

const IndexPage = () => (
  <Grid>
    <Hero />
    <ProjectContainer />

    <Link to="/websocket-demo/">View Websocket Demo</Link>
  </Grid>
);

export default IndexPage;
