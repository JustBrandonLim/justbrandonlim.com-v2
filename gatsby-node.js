const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const blogPost = path.resolve("./src/templates/blog-post.tsx");

  const { data } = await graphql(`
    query markdownPages {
      allMdx {
        nodes {
          frontmatter {
            category
            slug
          }
        }
      }
    }
  `);

  data.allMdx.nodes.forEach((node) => {
    if (node.frontmatter.category === "works") {
      actions.createPage({
        path: "/blog/works/" + node.frontmatter.slug,
        component: blogPost,
        context: { slug: node.frontmatter.slug },
      });
    } else if (node.frontmatter.category === "ctfs") {
      actions.createPage({
        path: "/blog/ctfs/" + node.frontmatter.slug,
        component: blogPost,
        context: { slug: node.frontmatter.slug },
      });
    } else {
      actions.createPage({
        path: "/blog/thoughts/" + node.frontmatter.slug,
        component: blogPost,
        context: { slug: node.frontmatter.slug },
      });
    }
  });
};
