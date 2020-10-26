import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {Helmet} from 'react-helmet'

const Head= ({pageTitle}) => {
    const data = useStaticQuery(graphql `
        query {
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)

    return (
        <Helmet title={`${pageTitle} | ${data.site.siteMetadata.title}`}/>
    )
}

export default Head