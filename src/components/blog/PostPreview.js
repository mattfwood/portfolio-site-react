import React from 'react';
import Link from 'gatsby-link';
import { Col } from 'react-flexbox-grid';
import * as PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    body: PropTypes.object.isRequired,
    subhead: PropTypes.string.isRequired,
  }).isRequired,
};

const PostPreview = ({ post }) => (
  <Col xs={12} md={6}>
    <div className="post-preview">
      <Link to={`/posts/${post.id}`}>
        <h4>{post.title}</h4>
      </Link>
      <div>
        {/* get the first line of the blog post */}
        <ReactMarkdown source={post.subhead} />
      </div>
    </div>
  </Col>
);

PostPreview.propTypes = propTypes;

export default PostPreview;
