import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import * as PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';

import Header from '../components/Header';

const propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

const PostTemplate = (props) => {
  const post = props.data.contentfulPost;
  console.log(post);
  const { title, body, subhead, createdAt } = post;
  return (
    <div>
      <Header menu={false} />
      <div className="page-content">
        <Grid>
          <Row>
            <Col xs={12}>
              <div className="blog-post-wrapper">
                <div className="blog-post-heading">
                  <h2 className="blog-post-title">{title}</h2>
                  <h4 className="blog-post-subhead">{subhead}</h4>
                  <h5>
                    <Moment className="blog-post-date" format="MMM DD, YYYY">{createdAt}</Moment>
                  </h5>
                </div>
                <hr />
                <div className="blog-post-body">
                  <ReactMarkdown source={body.body} />
                </div>
              </div>
            </Col>
          </Row>
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
      subhead
      createdAt

      body {
        id
        body
      }
    }
  }
`;
