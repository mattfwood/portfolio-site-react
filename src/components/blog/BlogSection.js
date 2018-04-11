import React from 'react';
import Link from 'gatsby-link';
import * as PropTypes from 'prop-types';

const propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const BlogSection = ({ posts }) => (
  <div>
    <h2>Blog</h2>
    <div>
      {posts.map(post => <Link to={`/posts/${post.node.id}`}>{post.node.title}</Link>)}
    </div>
  </div>
);

BlogSection.propTypes = propTypes;

export default BlogSection;
