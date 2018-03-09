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
          Item 1
      </Col>
      <Col xs={4}>
          Item 2
      </Col>
      <Col xs={4}>
          Item 3
      </Col>
    </Row>

    <ProjectContainer />

    <Link to="/websocket-demo/">View Websocket Demo</Link>
  </Grid>
);

export default IndexPage;
