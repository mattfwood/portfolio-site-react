module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': 0,
    'react/no-array-index-key': 0,
  },
  globals: {
    graphql: true,
    window: true,
    document: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
  },
};
