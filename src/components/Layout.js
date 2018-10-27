import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './styles/index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Matt Wood | Web Developer" />
    <Navbar />
    <div className="main-content">{children}</div>
  </div>
)

export default TemplateWrapper
