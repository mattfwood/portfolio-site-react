import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import * as PropTypes from 'prop-types';
import Moment from 'react-moment';
import Helmet from 'react-helmet';
import { navigate } from 'gatsby';
import Link from 'gatsby-link';

import Header from '../components/Header';
// import ArrowLeft from '../layouts/icons/arrow-left.svg';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

class PostTemplate extends React.Component {
  handleMenuClick = (section) => {
    navigate(`/#${section}`);
  }

  render() {
    // console.log(this.props)
    const { contentfulPost, allContentfulPost } = this.props.data;
    const {
      title,
      body,
      // subhead,
      createdAt,
    } = contentfulPost;
    const imageURL = contentfulPost.image.resolutions.src;

    const PostBody = () => {
      const html = body.childMarkdownRemark.html;
      return (
        <div
          className="blog-post-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    };

    const allPosts = allContentfulPost.edges.map(edge => edge.node);
    console.log(allPosts);
    const currentPostIndex = allPosts.findIndex(post => post.id === contentfulPost.id);
    const previousPost = allPosts[currentPostIndex - 1];
    const nextPost = allPosts[currentPostIndex + 1];
    console.log({ previousPost, nextPost });

    return (
      <Layout>
        <Helmet
          title={`Matt Wood | ${title}`}
          meta={[
            { name: 'description', content: "Matt Wood's Developer Portfolio" },
            {
              name: 'keywords',
              content: 'matt, wood, matt wood, developer, portfolio',
            },
          ]}
        />
        <Header
          menu
          blogPage
          headerOpaque
          scrollToSection={this.handleMenuClick}
        />
        <div className="page-content blog-post-container">
          <Grid>
            {/* <Row>
            <Link to="/" className="back-arrow-link">
              <div className="back-arrow-row">
                <img
                  src={ArrowLeft}
                  className="blog-back-arrow"
                  alt="back arrow"
                />
                <div>Back</div>
              </div>
            </Link>
          </Row> */}
            <Row>
              <Col xs={12}>
                <div className="blog-post-wrapper">
                  <h2 className="blog-post-title">{title}</h2>
                  <img
                    className="blog-header-image"
                    src={imageURL}
                    alt={title}
                  />
                  <div className="blog-post-heading">
                    {/* <h4 className="blog-post-subhead">{subhead}</h4> */}
                    <h5 className="blog-post-date">
                      Published on
                      {' '}
                      <Moment format="MMM DD, YYYY">{createdAt}</Moment>
                    </h5>
                  </div>
                  <hr />
                  <PostBody />
                  <div className="read-more-section">
                    <div>
                      {previousPost && (
                        <>
                          <div>
                            « Previous
                          </div>
                          <Link to={`/posts/${previousPost.id}`}>
                            {previousPost.title}
                          </Link>
                        </>
                    )}
                    </div>
                    <div>
                      {nextPost && (
                        <>
                          <div>
                          Next »
                          </div>
                          <Link to={`/posts/${nextPost.id}`}>
                            {nextPost.title}
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                  <Footer />
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </Layout>
    );
  }
}

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
        childMarkdownRemark {
          html
        }
      }
    }

    allContentfulPost {
      edges {
        node {
          id
          createdAt
          title
        }
      }
    }
  }
`;
