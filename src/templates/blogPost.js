import React from 'react';
import { Grid } from 'react-flexbox-grid';
import * as PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import Header from '../components/Header';

const propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

const PostTemplate = props => {
  const post = props.data.contentfulPost;
  const { title } = post;
  return (
    <div>
      <Header menu={false}/>
      <div className="page-content">
        <Grid>
          <h2>{title}</h2>
          <div>
            <ReactMarkdown source={props.data.contentfulPost.body.body} />
          </div>
        </Grid>
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
