import React from "react";
import Link from "gatsby-link";

const IndexPage = ({data}) => {
  console.log(data)
  return(

  <div className="blog-post-box">
    {data.allMarkdownRemark.edges.map(({node}) => (
      <Link to={node.fields.slug} style={{textDecoration: 'none', color: 'inherit'}}><div key={node.id} className="article-box">
      <h3 className="title">{node.frontmatter.title}</h3>
        <p className="date">{node.frontmatter.date} {node.timeToRead}min read</p>
        <p className="excerpt">{node.excerpt}</p>
      </div></Link>
    ))}
  </div>
  )
}

export default IndexPage

export const  query = graphql`
query HomePageQuery{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        fields{
          slug
        }
        frontmatter {
          title
          date
        }
        excerpt
        timeToRead
      }
    }
  }
}
`
