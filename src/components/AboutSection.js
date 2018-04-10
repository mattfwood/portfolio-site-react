import React, { Component } from 'react';

class AboutSection extends Component {
  render() {
    return (
      <div className="about-section">
        <h2>🙇‍ About</h2>
        <div className="about-body">
          {/* It me */}
          <ul>
            <li>Matt does stuff</li>
            <li>Sometimes matt does things</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AboutSection;