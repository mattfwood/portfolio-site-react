import React from 'react';
import Link from 'gatsby-link';
import { Row, Col } from 'react-flexbox-grid';
import * as PropTypes from 'prop-types';

const propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    body: PropTypes.object.isRequired,
    subhead: PropTypes.string.isRequired,
  }).isRequired,
};

const PostPreview = (props) => {
  const { post } = props;
  console.log(post);
  return (
    <Col xs={12} md={6}>
      <Link to={`/posts/${post.id}`}>
        <h4>{post.title}</h4>
      </Link>
      <div>
        {/* get the first line of the blog post */}
        {post.body.body.split('\n')[0]}
      </div>
    </Col>
  );
};

PostPreview.propTypes = propTypes;

export default PostPreview;
