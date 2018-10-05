import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ContactSection from '../components/Contact/ContactSection';
import ProjectContainer from '../components/Projects/ProjectContainer';
import AboutSection from '../components/AboutSection';
import BlogSection from '../components/blog/BlogSection';
import Layout from '../components/Layout';
import PostItem from '../components/blog/PostItem';

const postsQuery = graphql`
  query PostsQuery {
    allContentfulPost {
      edges {
        node {
          id
          title
          subhead
          createdAt
          image {
            fixed {
              src
            }
          }

          body {
            id
            body
          }
        }
      }
    }
  }
`;

class BlogPage extends Component {
  state = {
    heroAnimation: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ heroAnimation: true });
    }, 500);

    const { hash } = window.location;

    if (hash) {
      this.scrollToSection(hash.replace('#', ''));
    }
  }

  scrollToSection = (clickedSection) => {
    const section = document.querySelector(`#${clickedSection}`);
    const offsetTop = section.offsetTop - 125;
    // const offsetTop = section.offsetTop;

    window.scroll({
      top: offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  }

  render() {
    // const posts = this.props.data.allContentfulPost.edges;
    // console.log(posts);
    return (
      <Layout>
        <StaticQuery
          query={postsQuery}
          render={(data) => {
            const posts = data.allContentfulPost.edges;
            const { heroAnimation } = this.state;
            return (
              <>
                <Header
                  scrollToSection={this.scrollToSection}
                  menu
                  blogPage
                  headerOpaque
                />
                <div
                  style={{
                    maxWidth: 960,
                    padding: '0px 1.0875rem 1.45rem',
                    paddingTop: 0,
                  }}
                  className="page-content blog-page"
                >
                  <Grid>
                    <h1 className="page-heading">Blog</h1>
                    {posts.map(post => (
                      <PostItem post={post.node} key={post.node.id} />
                    ))}
                  </Grid>
                </div>
                <Footer />
              </>
            );
          }}
        />
      </Layout>
    );
  }
}

// BlogPage.propTypes = propTypes;

export default BlogPage;
