import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import * as PropTypes from 'prop-types'
import Moment from 'react-moment'
import Link from 'gatsby-link'
import { navigate } from 'gatsby';

import Header from '../components/Header'
import ArrowLeft from '../layouts/icons/arrow-left.svg'
import Footer from '../components/Footer';

const propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
}

class PostTemplate extends React.Component {
  handleMenuClick = (section) => {;
    navigate(`/#${section}`)
  }

  render() {
    const post = this.props.data.contentfulPost
    // console.log(post);
    const { title, body, subhead, createdAt } = post
    const imageURL = post.image.resolutions.src

    const PostBody = () => {
      const html = body.childMarkdownRemark.html
      return (
        <div
          className="blog-post-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )
    }
    return (
      <div>
        <Header
          menu={true}
          blogPage={true}
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
                  <img className="blog-header-image" src={imageURL} alt={title} />
                  <div className="blog-post-heading">
                    {/* <h4 className="blog-post-subhead">{subhead}</h4> */}
                    <h5 className="blog-post-date">
                      Published on {' '}
                      <Moment format="MMM DD, YYYY">
                        {createdAt}
                      </Moment>
                    </h5>
                  </div>
                  <hr />
                  <PostBody />
                  <Footer />
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

PostTemplate.propTypes = propTypes

export default PostTemplate

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
  }
`
