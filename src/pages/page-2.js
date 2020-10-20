import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import PostList from '../components/PostList'

import Layout from "../components/layout"
import SEO from "../components/seo"


    


const SecondPage = () => {
const posts = useStaticQuery(graphql `
    query {
        allMarkdownRemark{
            edges{
                node{
                    frontmatter{
                        date
                        title
                    }
                    fields{
                        slug
                    }
                }
            }
        }
    }
`)

const allPosts = posts.allMarkdownRemark.edges.map(post => <Link to={`/blog/${post.node.fields.slug}`}><li><h2>{post.node.frontmatter.title}</h2><p>{post.node.frontmatter.date}</p><hr/></li></Link>)
return(

  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome tothe  page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <ol>
    {allPosts}
    </ol>
  </Layout>
)
}

export default SecondPage
