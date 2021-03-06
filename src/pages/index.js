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

const pageQuery = graphql`
  query PageQuery {
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

class IndexPage extends Component {
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
          query={pageQuery}
          render={(data) => {
            const posts = data.allContentfulPost.edges;
            const { heroAnimation } = this.state;
            console.log(data);
            return (
              <>
                <Header scrollToSection={this.scrollToSection} menu />
                <Hero animation={heroAnimation} />
                <div
                  style={{
                    maxWidth: 960,
                    padding: '0px 1.0875rem 1.45rem',
                    paddingTop: 0,
                  }}
                  className="page-content"
                >
                  <Grid>
                    <AboutSection />
                    <ProjectContainer />
                    <BlogSection posts={posts} />
                    <ContactSection />
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

// IndexPage.propTypes = propTypes;

export default IndexPage;
