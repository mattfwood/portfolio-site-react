import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { Grid } from 'react-flexbox-grid';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ContactSection from '../components/Contact/ContactSection';
import ProjectContainer from '../components/ProjectContainer';
import AboutSection from '../components/AboutSection';
import BlogSection from '../components/blog/BlogSection';

const propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

class IndexPage extends Component {
  state = {
    heroAnimation: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ heroAnimation: true });
    }, 800);
  }

  scrollToSection = (clickedSection) => {
    const section = document.querySelector(`.${clickedSection}`);
    const offsetTop = section.offsetTop - 125;

    window.scroll({
      top: offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  render() {
    const posts = this.props.data.allContentfulPost.edges;
    console.log(posts);
    return (
      <div>
        <Header scrollToSection={this.scrollToSection} menu />
        <Hero animation={this.state.heroAnimation} />
        <div
          style={{
            // margin: '0 auto',
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
            {/* <Link to="/websocket-demo/">View Websocket Demo</Link> */}
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}

IndexPage.propTypes = propTypes;

export default IndexPage;

export const pageQuery = graphql`
  query PageQuery {
    allContentfulPost {
      edges {
        node {
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
          }
        }
      }
    }
  }
`;
