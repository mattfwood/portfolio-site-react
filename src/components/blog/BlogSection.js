import React from 'react'
import { Row, Grid } from 'react-flexbox-grid'
import Link from 'gatsby-link';
import * as PropTypes from 'prop-types'

import PostPreview from './PostPreview'

const propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const BlogSection = ({ posts }) => (
  <div className="blog-section" id="blog">
    <Grid>
      <h2 className="section-header">
        <span role="img" aria-label="keyboard emoji">
          ⌨️
        </span>{' '}
        Blog
      </h2>
      <Row>
        {posts.map((post, index) => (
          <PostPreview key={index} post={post.node} />
        ))}
      </Row>
      <Link to="/blog">
        <h3 className="blog-view-more">
          View More
        </h3>
      </Link>
    </Grid>
  </div>
)

BlogSection.propTypes = propTypes

export default BlogSection
