import React from 'react';
import * as PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

const PostTemplate = (props) => {
  console.log(props);
  const post = props.data.contentfulPost;
  const { title } = post;
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {/* <ReactMarkdown source={props.data.contentfulPost.body.body} /> */}
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
