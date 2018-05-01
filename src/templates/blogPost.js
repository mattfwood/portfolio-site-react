import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import * as PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import Link from 'gatsby-link';

import Header from '../components/Header';
import ArrowLeft from '../layouts/icons/arrow-left.svg';

const remark = require('remark');
const reactRenderer = require('remark-react');
const sanitize = require('sanitize-html');

const propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

const PostTemplate = (props) => {
  const post = props.data.contentfulPost;
  // console.log(post);
  const { title, body, subhead, createdAt } = post;
  const imageURL = post.image.resolutions.src;
  console.log(props.data.allMarkdownRemark.edges);
  const { id } = props.pathContext;
  console.log(props);
  const markdownPosts = props.data.allMarkdownRemark.edges;
  console.log(
    remark()
      .use(reactRenderer)
      .processSync(body.body).contents,
  );
  const markdownBody = markdownPosts.find(markdownPost => markdownPost.node.id.split('bodyTextNode')[0] === id).node.html;
  console.log(markdownBody);
  return (
    <div>
      <Header menu={false} headerOpaque />
      <div className="page-content blog-post-container">
        <Grid>
          <Row>
            <Link to="/" className="back-arrow-link">
              <div className="back-arrow-row">
                <img src={ArrowLeft} className="blog-back-arrow" alt="back arrow" />
                <div>Back</div>
              </div>
            </Link>
          </Row>
          <Row>
            <Col xs={12}>

              <div className="blog-post-wrapper">
                <img className="blog-header-image" src={imageURL} alt={title} />
                <div className="blog-post-heading">
                  <h2 className="blog-post-title">{title}</h2>
                  <h4 className="blog-post-subhead">{subhead}</h4>
                  <h5>
                    <Moment className="blog-post-date" format="MMM DD, YYYY">
                      {createdAt}
                    </Moment>
                  </h5>
                </div>
                <hr />
                <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: markdownBody }} />
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
      image {
        resolutions {
          src
        }
      }

      body {
        id
        body
      }
    }

    allMarkdownRemark {
      edges {
        node {
          html
          id
        }
      }
    }
  }
`;
