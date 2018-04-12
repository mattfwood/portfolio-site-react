import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './stylesheets/index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Matt Wood | Developer"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
