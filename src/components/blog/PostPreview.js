import React from 'react'
import Link from 'gatsby-link'
import { Col } from 'react-flexbox-grid'
import * as PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'

const propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    body: PropTypes.shape({
      body: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
    subhead: PropTypes.string.isRequired,
    image: PropTypes.shape({
      resolutions: PropTypes.shape({
        src: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
}

const PostPreview = ({ post }) => (
  <Col xs={12} md={6}>
    <div className="post-preview">
      <Link to={`/posts/${post.id}`}>
        <div
          className="post-title-wrapper"
          style={{ background: `url(${post.image.resolutions.src})` }}
        >
          <div className="post-preview-overlay">
            <div className="post-text-wrapper">
              <h4 className="post-preview-title">{post.title}</h4>
              <div className="post-preview-subhead">{post.subhead}</div>
            </div>
            <div className="post-preview-date">
              <Moment format="MM-DD-YYYY">{post.createdAt}</Moment>
            </div>
          </div>
        </div>
      </Link>
      {/* <div>
        <div className="post-preview-subhead">{post.subhead}</div>
      </div> */}
    </div>
  </Col>
)

PostPreview.propTypes = propTypes

export default PostPreview
