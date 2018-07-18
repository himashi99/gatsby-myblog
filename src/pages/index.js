import React from "react";
import Link from "gatsby-link";
import Footer from '../components/footer'
// image import
import BannerImage from '../images/hero-image2.jpg';
import HandImage from '../images/wave-hand.svg';
import GithubIcon from '../images/github.svg';
import TwitterIcon from '../images/twitter.svg';
import MediumIcon from '../images/medium.svg';
import EmailIcon from '../images/email.png';


const IndexPage = ({data}) => {
  console.log(data)
  return(
  <div>
    <div>
       <img src={BannerImage}/>
    </div>

    <container>

      <div className="blog-post-box"
        style={{
          margin: '0 10px 0 100px',
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}>

        {data.allMarkdownRemark.edges.map(({node}) => (
        <Link to={node.fields.slug} style={{textDecoration: 'none', color: 'inherit'}}>
        <div key={node.id} className="article-box">
          <h3 className="title">{node.frontmatter.title}</h3>
          <p className="date">{node.frontmatter.date} {node.timeToRead}min read</p>
          <p className="excerpt">{node.excerpt}</p>
          </div></Link>
        ))}
      </div>

      <section>
        <div className="description-box">
          <p className="my-name">Hi, I{`'`}m Himashi <img src={HandImage} alt="Waving Hand" height="20px" width="20px"/></p>
          <p className="description">I{`'`}m a front-end <span>web developer</span> based in <span>Toronto</span>. Follow me as I try to improve my programming skills by completing the <span>#{`100DaysofCode`}</span> challenge!</p>
        </div>
        <div className="links-box">
          <a href="https://github.com/himashi99">
          <div className="icon-link">
            <img src={GithubIcon} alt="Github Icon" height="40px" width="40px"/>
            <div>
              <p className="icon-name"> Github</p>
              <p className="link-address">@himashi99</p>
            </div>
          </div>
          </a>

          <a href="https://twitter.com/himashi99">
          <div className="icon-link">
            <img src={TwitterIcon} alt="Twitter Icon" height="40px" width="40px"/>
            <div>
              <p className="icon-name">Twitter</p>
              <p className="link-address">@himashi99</p>
            </div>
          </div>
          </a>

          <a href="https://medium.com/@himashi99">
          <div className="icon-link">
            <img src={MediumIcon} alt="Meidum Icon" height="40px" width="40px"/>
            <div>
              <p className="icon-name">Medium</p>
              <p className="link-address">@himashi99</p>
            </div>
          </div>
          </a>

          <a href="mailto:himashi.hettegedona@icloud.com">
          <div className="icon-link">
            <img src={EmailIcon} alt="Email Icon" height="40px" width="40px"/>
            <div>
              <p className="icon-name">Email</p>
              <p className="link-address">himashi.hettegedona@icloud.com</p>
            </div>
          </div>
          </a>

        </div>
      </section>
    </container>
    <Footer/>
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
