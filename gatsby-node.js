exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const workTemplate = require.resolve(`./src/templates/workTemplate.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `portfolio/${node.frontmatter.slug}`,
      component: workTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
