/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const slash = require('slash');

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local Contentful graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
    graphql(
      `
        {
          allContentfulPost(limit: 1000) {
            edges {
              node {
                id
              }
            }
          }
        }
      `,
    )
      .then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create blogPost pages
        const blogPostTemplate = path.resolve('./src/templates/blogPost.js');
        // We want to create a detailed page for each
        // blogPost node. We'll just use the Contentful id for the slug.
        _.each(result.data.allContentfulPost.edges, (edge) => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/posts/${edge.node.id}/`,
            component: slash(blogPostTemplate),
            context: {
              id: edge.node.id,
            },
          });
        });
      })
      .then(() => {
        graphql(
          `
            {
              allContentfulCategory(limit: 1000) {
                edges {
                  node {
                    id
                  }
                }
              }
            }
          `,
        ).then((result) => {
          if (result.errors) {
            reject(result.errors);
          }

          resolve();
        });
      });
  });
};
