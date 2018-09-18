import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './stylesheets/index.scss'

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
    />
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Layout
