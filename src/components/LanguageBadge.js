import React from 'react';
import PropTypes from 'prop-types';

const LanguageBadge = ({ language }) => {
  if (language) {
    return <span className={`language-badge ${language}`}>{language}</span>;
  }
  return <span className={'language-badge'}>N/A</span>;
};

LanguageBadge.propTypes = {
  language: PropTypes.string.isRequired,
};

export default LanguageBadge;
