import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './stylesheets/index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Matt Wood | Developer"
      meta={[
        { name: 'description', content: "Matt Wood's Developer Portfolio" },
        { name: 'keywords', content: 'matt, wood, matt wood, developer, portfolio' },
      ]}
    />
    {children}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
