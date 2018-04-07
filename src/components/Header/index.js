import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Header extends Component {
  state = {
    scrollHeight: 0,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.scrollY;
    this.setState({
      scrollHeight: window.scrollY
    })
  }

  render() {
    const { scrollHeight } = this.state;

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
          <Col>
            <Row className="nav">
              <Col>
                <div className="nav-item">About</div>
              </Col>
              <Col>
                <div className="nav-item">Projects</div>
              </Col>
              <Col>
                <div className="nav-item">Contact</div>
              </Col>
              <Col>
                <div className="nav-item">About</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </div>
    )
  }
}

export default Header;
