import React from 'react'
import { Row, Grid } from 'react-flexbox-grid'
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
    </Grid>
  </div>
)

BlogSection.propTypes = propTypes

export default BlogSection
