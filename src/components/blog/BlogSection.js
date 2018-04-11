import React from 'react';
import { Row } from 'react-flexbox-grid';
import * as PropTypes from 'prop-types';
import PostPreview from './PostPreview';

const propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const BlogSection = ({ posts }) => (
  <div>
    <h2 className="section-header">Blog</h2>
    <Row>{posts.map(post => <PostPreview post={post.node} />)}</Row>
  </div>
);

BlogSection.propTypes = propTypes;

export default BlogSection;
