import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Route } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactMarkdown from 'react-markdown';

import BlogPost from '../components/blog/BlogPost';
import client from '../client';

class Post extends Component {
  state = {
    post: {}
  }
  componentWillMount() {
    const id = this.props.location.search.split('=')[1]
    console.log(id);

    client.getEntry(id)
      .then((entry) => {
        console.log(entry);
        this.setState({ post: entry });
      })
      .catch(console.error);
  }

  render() {
    const { post } = this.state;
    if (Object.keys(post).length > 0) {
      return (
        <Grid>
          <h1>{post.fields.title}</h1>
          <p>{post.fields.createdAt}</p>
          <ReactMarkdown source={post.fields.body} />
        </Grid>
      )
    }
    return null;
  }
}

export default Post;
