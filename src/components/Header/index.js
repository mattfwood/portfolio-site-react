import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Grid, Row, Col } from 'react-flexbox-grid';

import * as PropTypes from 'prop-types';

const propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollHeight: 0,
      windowWidth: 0,
      mobileMenuOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    this.setInitialWidth();
  }

  setInitialWidth = () => {
    this.setState({
      windowWidth: window.innerWidth,
    });
  };

  handleScroll = () => {
    this.setState({
      scrollHeight: window.scrollY,
    });
  };

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
    });
  };

  toggleMobileMenu = () => {
    console.log('MOBILE MENU TOGGLE');
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen,
    });
  };

  mobileMenuSelect = (section) => {
    // close mobile menu on select
    this.toggleMobileMenu();
    // scroll to section
    this.props.scrollToSection(section);
  }

  render() {
    const { scrollHeight } = this.state;
    const { scrollToSection } = this.props;

    const nav = () => {
      if (this.state.windowWidth > 768) {
        return (
          <Col>
            <Row className="nav">
              <Col>
                <div
                  role="button"
                  className="nav-item"
                  tabIndex={0}
                  onClick={() => scrollToSection('about-section')}
                >
                  About
                </div>
              </Col>
              <Col>
                <div
                  className="nav-item"
                  role="button"
                  tabIndex={0}
                  onClick={() => scrollToSection('project-section')}
                >
                  Projects
                </div>
              </Col>
              <Col>
                <div
                  className="nav-item"
                  role="button"
                  tabIndex={0}
                  onClick={() => scrollToSection('contact-section')}
                >
                  Contact
                </div>
              </Col>
              <Col>
                <div
                  className="nav-item"
                  role="button"
                  tabIndex={0}
                  onClick={() => scrollToSection('blog-section')}
                >
                  Blog
                </div>
              </Col>
            </Row>
          </Col>
        );
      }

      const mobileMenuVisible = this.state.mobileMenuOpen ? 'active' : 'inactive';

      return (
        <div className="mobile-menu-wrapper">
          <div
            className={`hamburger-menu ${mobileMenuVisible}`}
            role="button"
            onClick={this.toggleMobileMenu}
            tabIndex={0}
          >
            <div className="menu-line hb-top" />
            <div className="menu-line hb-mid" />
            <div className="menu-line hb-bottom" />
          </div>
          <div className={`mobile-menu-dropdown ${mobileMenuVisible}`}>
            <div
              className="nav-item mobile-nav-1"
              role="button"
              tabIndex={0}
              onClick={() => this.mobileMenuSelect('about-section')}
            >
              About
            </div>
            <div
              className="nav-item mobile-nav-2"
              role="button"
              tabIndex={0}
              onClick={() => this.mobileMenuSelect('project-section')}
            >
              Projects
            </div>
            <div
              className="nav-item mobile-nav-3"
              role="button"
              tabIndex={0}
              onClick={() => this.mobileMenuSelect('contact-section')}
            >
              Contact
            </div>
            <div
              className="nav-item mobile-nav-4"
              role="button"
              tabIndex={0}
              onClick={() => this.mobileMenuSelect('blog-section')}
            >
              Blog
            </div>
          </div>
        </div>
      );
    };

    return (
      <div
        style={{
          background: 'teal',
          marginBottom: '1.45rem',
        }}
        className={`header ${scrollHeight === 0 ? 'transparent' : ''}`}
      >
        <Grid>
          <Row middle="xs" between="xs" style={{ width: '100%' }}>
            <Col>
              <h1 style={{ margin: 0 }}>
                <Link
                  to="/"
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  Matt Wood
                </Link>
              </h1>
            </Col>
            {
              this.props.menu && (
                <Col>{nav()}</Col>
              )
            }
          </Row>
        </Grid>
      </div>
    );
  }
}

Header.propTypes = propTypes;

export default Header;
