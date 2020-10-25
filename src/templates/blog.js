import React from 'react'
import {graphql} from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'


import Layout from '../components/layout'

// export const query = graphql `
// query (
//   $slug : String!
// ){
//   markdownRemark (
//     fields: {
//       slug: {eq: $slug}
//     }
//   ){
//     frontmatter{
//       title
//     }
//     html
//   }
// }

// `

export const query = graphql `
query($slug: String!){
    contentfulBlogPost(slug :{eq: $slug}){
        title
        published(fromNow: true)
        content{
            json
        }
    }
}
`
const Blog = (props) => {
    const options =  {
        renderNode: {
            "embedded-asset-block" : (node) => {
                const alt = node.data.target.fields.title["en-US"]
                const url = node.data.target.fields.file["en-US"].url

                return <img src={url} alt={alt} />
            }
        }
    }
    return (
        <Layout>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.published}</p>
            <div>
                {documentToReactComponents(props.data.contentfulBlogPost.content.json, options)}
            </div>
            {/* <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{
                __html: props.data.markdownRemark.html
            }}></div> */}
        </Layout>

    )
}

export default Blog