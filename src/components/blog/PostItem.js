import React, { Component } from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import Link from 'gatsby-link'

import ReactMarkdown from 'react-markdown';

const PostRow = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const PostImage = styled.div`
  padding-right: 30px;
  /* max-width: 20%; */
  /* max-height: 100%; */
  /* max-width: 100%; */
  height: auto;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 30px;
  width: calc(100% - 200px);

  a {
    color: #233142;
    text-decoration: underline;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const PostTitle = styled.h1`
  font-size: 28px;
  font-family: 'Raleway';
  text-transform: uppercase;
  margin: 0;
`;

const PostMeta = styled.div`
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
  padding-top: 5px;
`;

const PostPreview = styled.div`
  padding-top: 30px;
  font-family: 'Merriweather';
`;

class PostItem extends Component {
  // TODO: Prop-types
  render() {
    const { post } = this.props;
    console.log(post);

    const PostBody = () => {
      const html = post.body.childMarkdownRemark.html;
      return (
        <div
          className="blog-post-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    };

    return (
      <PostRow>
        <PostImage>
          <img src={post.image.fixed.src} alt="" />
        </PostImage>
        <PostContent>
          <Link to={`/posts/${post.id}`}>
            <PostTitle>
              {post.title}
            </PostTitle>
          </Link>
          <PostMeta>
            Published on <Moment format="MMM DD, YYYY">{post.createdAt}</Moment>
          </PostMeta>
          <PostPreview>
            <ReactMarkdown source={post.body.body.split('\n')[0]}/>
          </PostPreview>
        </PostContent>
      </PostRow>
    );
  }
}

export default PostItem;