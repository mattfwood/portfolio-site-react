import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Route } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactMarkdown from 'react-markdown';

import BlogPost from '../components/blog/BlogPost';
import client from '../client';

class Post extends Component {
  componentWillMount() {
    // const id = this.props.location.search.split('=')[1]
    // console.log(id);

    // client.getEntry(id)
    //   .then((entry) => {
    //     console.log(entry);
    //     this.setState({ post: entry });
    //   })
    //   .catch(console.error);
  }

  render() {
    // const { post } = this.state;
      return (
        <Grid>
          <h1>Title</h1>
          <p>Date</p>
          <ReactMarkdown source={`## Subhead`} />
        </Grid>
      )
  }
}

export default Post;


export const pageQuery = graphql`
  query pageQuery($id: String!) {
    contentfulProduct(id: { eq: $id }) {
      productName {
        productName
      }
      productDescription {
        childMarkdownRemark {
          html
        }
      }
      price
      image {
        resolutions(width: 50, height: 50) {
          base64
          src
          srcSet
          height
          width
        }
      }
      brand {
        companyName {
          companyName
        }
      }
      categories {
        id
        title {
          title
        }
      }
    }
  }
`