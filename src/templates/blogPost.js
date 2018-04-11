import React from 'react';
import * as PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

const PostTemplate = (props) => {
  const post = props.data.contentfulPost;
  const { body, title } = post;
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <ReactMarkdown source={body.body} />
      </div>
    </div>
  );
};

PostTemplate.propTypes = propTypes;

export default PostTemplate;

export const pageQuery = graphql`
  query postQuery($id: String!) {
    contentfulPost(id: { eq: $id }) {
      id
      title

      body {
        id
        body
      }
    }
  }
`;
