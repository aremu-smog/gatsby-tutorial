import React, { children } from 'react'
import {Link, graphql, useStaticQuery} from "gatsby"
import Header from "./header"

import './layout.css'
const Layout = ({children}) => {
    const data = useStaticQuery(graphql `
    query{
        site{
            siteMetadata{
                author
            }
        }
    }
    `)
    return(
        <section>
            <Header />
          <section>{children}</section>  

          <footer>&copy; Built by {data.site.siteMetadata.author}</footer>
        </section>
        
    )
}

export default Layout