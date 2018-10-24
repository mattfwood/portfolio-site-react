import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './stylesheets/index.scss';

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Matt Wood | Developer"
      meta={[
        { name: 'description', content: "Matt Wood's Developer Portfolio" },
        {
          name: 'keywords',
          content: 'matt, wood, matt wood, developer, portfolio',
        },
      ]}
    >
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      <script>
        if (window.netlifyIdentity) {
          window.netlifyIdentity.on("init", user => {
            if (!user) {
              window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
              });
            }
          })
        }
      </script>
    </Helmet>
    {children}

  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default Layout;
