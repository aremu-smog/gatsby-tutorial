import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"



import Layout from "../components/layout"
// import SEO from "../components/seo"
import Head from "../components/head"

    


const SecondPage = () => {
const posts = useStaticQuery(graphql `
    query {
       allContentfulBlogPost {
    edges {
      node {
        title
        published(fromNow: true)
        slug
      }
    }
  }
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
    }
`)

// const contentfulPosts = useStaticQuery(graphql `
// query {
//   allContentfulBlogPost {
//     edges {
//       node {
//         title
//         published(fromNow: true)
//         slug
//       }
//     }
//   }
// }
// `)

const allContenfulPosts = posts.allContentfulBlogPost.edges.map( 
    contentfulPost => 
    <Link to={`/blog/${contentfulPost.node.slug}`}>
        <li><h2>{contentfulPost.node.title}</h2>
        <p>{contentfulPost.node.published}</p>
    </li>
    </Link>
    )

const allPosts = posts.allMarkdownRemark.edges.map(post => <Link to={`/blog/${post.node.fields.slug}`}><li><h2>{post.node.frontmatter.title}</h2><p>{post.node.frontmatter.date}</p><hr/></li></Link>)
return(

  <Layout>
    <Head pageTitle="Blog" />
    {/* <SEO title="Page two" /> */}
    <h1>Hi from the second page</h1>
    <p>Welcome tothe  page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <ol>
    {allContenfulPosts}
    {allPosts}
    </ol>
  </Layout>
)
}

export default SecondPage
