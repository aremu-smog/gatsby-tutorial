/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
module.exports.onCreateNode = ({node, actions}) => {
    const {createNodeField} = actions
    
    console.log(JSON.stringify(node, undefined, 4))
}