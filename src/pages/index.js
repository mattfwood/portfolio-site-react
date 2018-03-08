import React from 'react';
import Link from 'gatsby-link';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Projects from '../components/Projects';

const IndexPage = () => (
  <Grid>
    <Row center="xs">
      <h1>Matt Wood</h1>
    </Row>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

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
    <Projects />

    <Link to="/page-2/">Go to page 2</Link>
  </Grid>
);

export default IndexPage;
