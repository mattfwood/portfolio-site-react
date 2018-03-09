import React from 'react';
import Link from 'gatsby-link';
import { Grid, Row, Col } from 'react-flexbox-grid';

import ProjectContainer from '../components/ProjectContainer';

const IndexPage = () => (
  <Grid>
    <Row center="xs">
      <h1>Matt Wood's Portfolio</h1>
    </Row>
    
    <Row center="xs">
      <Col xs={4}>
        Loyal
      </Col>
      <Col xs={4}>
        Hard-working
      </Col>
      <Col xs={4}>
        Jackhammer
      </Col>
    </Row>

    <ProjectContainer />

    <Link to="/websocket-demo/">View Websocket Demo</Link>
  </Grid>
);

export default IndexPage;
