import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Grid, Row, Col } from 'react-flexbox-grid'

import * as PropTypes from 'prop-types'

const propTypes = {
  scrollToSection: PropTypes.func.isRequired,
  menu: PropTypes.bool,
}

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrollHeight: 0,
      windowWidth: 0,
      mobileMenuOpen: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
    this.setInitialWidth()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  }

  setInitialWidth = () => {
    this.setState({
      windowWidth: window.innerWidth,
    })
  }

  handleScroll = () => {
    this.setState({
      scrollHeight: window.scrollY,
    })
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
    })
  }

  toggleMobileMenu = () => {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen,
    })
  }

  mobileMenuSelect = section => {
    // close mobile menu on select
    this.toggleMobileMenu()
    // scroll to section
    console.log(section)
    this.props.scrollToSection(section)
  }

  render() {
    const { scrollHeight } = this.state
    const { scrollToSection } = this.props

    const nav = () => {
      // show desktop nav above 768px
      if (this.state.windowWidth > 768) {
        return (
          <Col>
            <Row className="nav">
              <Col>
                <div
                  role="button"
                  className="nav-item"
                  tabIndex={0}
                  onClick={() => scrollToSection('about')}
                >
                  About
                </div>
              </Col>
              <Col>
                <div
                  className="nav-item"
                  role="button"
                  tabIndex={0}
                  onClick={() => scrollToSection('project')}
                >
                  Projects
                </div>
              </Col>
              <Col>
                <div
                  className="nav-item"
                  role="button"
                  tabIndex={0}
                  onClick={() => scrollToSection('blog')}
                >
                  Blog
                </div>
              </Col>
              <Col>
                <div
                  className="nav-item"
                  role="button"
                  tabIndex={0}
                  onClick={() => scrollToSection('contact')}
                >
                  Contact
                </div>
              </Col>
            </Row>
          </Col>
        )
      }

      const mobileMenuVisible = this.state.mobileMenuOpen
        ? 'active'
        : 'inactive'

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
              className="mobile-menu-close-icon"
              role="button"
              onClick={this.toggleMobileMenu}
              tabIndex={0}
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 191.414 191.414"
                enableBackground="new 0 0 191.414 191.414"
              >
                <g>
                  <path d="M107.888,96.142l80.916-80.916c3.48-3.48,3.48-8.701,0-12.181s-8.701-3.48-12.181,0L95.707,83.961L14.791,3.045   c-3.48-3.48-8.701-3.48-12.181,0s-3.48,8.701,0,12.181l80.915,80.916L2.61,177.057c-3.48,3.48-3.48,8.701,0,12.181   c1.74,1.74,5.22,1.74,6.96,1.74s5.22,0,5.22-1.74l80.916-80.916l80.916,80.916c1.74,1.74,5.22,1.74,6.96,1.74   c1.74,0,5.22,0,5.22-1.74c3.48-3.48,3.48-8.701,0-12.181L107.888,96.142z" />
                </g>
              </svg>
            </div>
            <div
              className="nav-item mobile-nav-1"
              role="button"
              tabIndex={0}
              onClick={() => this.mobileMenuSelect('about')}
            >
              About
            </div>
            <div
              className="nav-item mobile-nav-2"
              role="button"
              tabIndex={0}
              onClick={() => this.mobileMenuSelect('project')}
            >
              Projects
            </div>
            <div
              className="nav-item mobile-nav-3"
              role="button"
              tabIndex={0}
              onClick={() => this.mobileMenuSelect('blog')}
            >
              Blog
            </div>
            <div
              className="nav-item mobile-nav-4"
              role="button"
              tabIndex={0}
              onClick={() => this.mobileMenuSelect('contact')}
            >
              Contact
            </div>
            <div className="nav-item bottom-link">
              <a href="https://github.com/mattfwood/portfolio-site-react">
                View Source Code
              </a>
            </div>
          </div>
        </div>
      )
    }

    const headerOpaque = this.props.headerOpaque ? 'header-opaque' : ''
    const blogPage = this.props.blogPage ? 'blogPage' : ''

    return (
      <div
        style={{
          background: '#233142',
        }}
        className={`header ${
          scrollHeight === 0 ? 'transparent' : ''
        } ${headerOpaque} ${blogPage}`}
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
            {this.props.menu && <Col>{nav()}</Col>}
          </Row>
        </Grid>
      </div>
    )
  }
}

Header.propTypes = propTypes

Header.defaultProps = {
  menu: false,
  blogPage: false,
}

export default Header
