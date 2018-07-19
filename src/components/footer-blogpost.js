import React from 'react'
import Link from "gatsby-link";

import GithubIcon from '../images/github.svg';
import TwitterIcon from '../images/twitter.svg';
import MediumIcon from '../images/medium.svg';
import EmailIcon from '../images/email.png';
import InternetIcon from '../images/internet.svg';
import HeartIcon from '../images/hearts.svg';

const PostFooter = () => (
  <footer className="footer-blogpost">
    <div className="footer-links-box-blogpost">
      <a href="https://github.com/himashi99">
      <div className="footer-link-blogpost">
        <img src={GithubIcon} alt="Github Icon" height="25px" width="25px"/>
      </div>
      </a>
      <a href="https://twitter.com/himashi99">
      <div className="footer-link-blogpost">
        <img src={TwitterIcon} alt="Twitter Icon" height="25px" width="25px"/>
      </div>
      </a>
      <a href="https://medium.com/@himashi99">
      <div className="footer-link-blogpost">
        <img src={MediumIcon} alt="Meidum Icon" height="25px" width="25px"/>
      </div>
      </a>
      <a href="https://himashi.ca/">
      <div className="footer-link-blogpost">
        <img src={InternetIcon} alt="Website Icon" height="25px" width="25px"/>
      </div>
      </a>
      <a href="mailto:himashi.hettegedona@icloud.com">
      <div className="footer-link-blogpost">
        <img src={EmailIcon} alt="Email Icon" height="25px" width="25px"/>
      </div>
      </a>
    </div>
    <div className="copyright-blogpost">
      <p>Made with <img src={HeartIcon} alt="Heart Icon" height="14px" width="14px"/> by Himashi Hettege Dona</p>
    </div>
  </footer>
);

export default PostFooter
