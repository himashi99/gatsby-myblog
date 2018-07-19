import React from "react";
import Header from '../components/header'
import FooterBlogPost from '../components/footer-blogpost'

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <div>
        <div className="blog-post-container">
          <Header siteTitle={"#100 Days of Code"} />
          <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
          <FooterBlogPost/>
        </div>
    );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
