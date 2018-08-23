import React from 'react';
import Layout from '../layouts/index';

const NotFoundPage = props => (
  <Layout location={props.location}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
  </Layout>
);

export default NotFoundPage;
