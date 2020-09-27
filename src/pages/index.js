import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {

const data = useStaticQuery(graphql `
query{
  site{
    siteMetadata{
      title
    }
  }
}
`)

return(
 <div>
      <Layout>
        <p>What's my name?</p>
        <h1>{data.site.siteMetadata.title} in the building!</h1>
      </Layout>
  </div>
)
 
}

export default IndexPage
