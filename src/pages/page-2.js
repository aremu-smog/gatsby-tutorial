import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

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
                }
            }
        }
    }
`)

const allPosts = posts.allMarkdownRemark.edges.map(post => `<li><h2>${post.node.frontmatter.title}</h2><p>${post.node.frontmatter.date}</p><hr/></li>`)
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
