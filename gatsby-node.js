const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'Mdx') {
        const slug = createFilePath({
            node,
            getNode,
            basePath: 'posts'
        });
        createNodeField({
            node, 
            name: 'slug',
            value: `/posts${slug}`
        })

    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
        graphql(`
            {
                allMdx {
                    edges {
                      node {
                        fields{
                          slug 
                        }
                      }
                    }
                 }
            }
        `).then(result => {
            result.data.allMdx.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve('./src/posts/fullPost.js'),
                    context: {
                        slug: node.fields.slug,
                    }
                });
            });
        resolve();
        });
    });
} 