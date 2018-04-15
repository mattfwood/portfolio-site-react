import React from 'react';
import { Row } from 'react-flexbox-grid';
import * as PropTypes from 'prop-types';
import { Grid } from 'react-flexbox-grid';

import PostPreview from './PostPreview';

const propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const BlogSection = ({ posts }) => (
  <div className="blog-section">
    <Grid>
      <h2 className="section-header">⌨️ Blog</h2>
      <Row>
        {posts.map((post, index) => <PostPreview key={index} post={post.node} />)}
      </Row>
    </Grid>
  </div>
);

BlogSection.propTypes = propTypes;

export default BlogSection;
