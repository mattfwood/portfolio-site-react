import React, { Component } from 'react';
import axios from 'axios';
import Link from 'gatsby-link';
import { Route } from 'react-router-dom';

import BlogPost from './BlogPost'
import client from '../../client'

class BlogSection extends Component {
  state = {
    posts: []
  }

  componentWillMount() {
    // client.getEntries()
    //   .then(({ items }) => {
    //     console.log(items);
    //     this.setState({
    //       posts: items
    //     })
    //   })
    //   .catch(console.error);
  }
  render() {
    const { posts } = this.props;
    return (
      <div>
        {
          posts.map((post, index) => (
            <Link to={`/post?id=${post.node.id}`}>{post.node.title}</Link>
          ))
        }
        {/* <Route path="/post/:id" component={BlogPost} />; */}
      </div>
    );
  }
}

// <BlogPost key={index} post={post} />

export default BlogSection;