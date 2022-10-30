import React,{memo} from 'react';
import styled from 'styled-components';
import post1 from '../assets/img/post1.jpg';
import post2 from '../assets/img/post2.jpg';
import mq from '../MediaQuery';

const FooterContainer = styled.footer`
  padding-top: 60px;
  .footer {
    margin-left: 5%;
    width: 30%;
    float: left;
    ${mq.maxWidth('lg')`
      width: 92%;
      margin-left: 8%;
    `}
    h3 {
      font-size: 23px;
      margin-bottom: 20px;
      font-weight: normal;
    }
    p {
      a {
        text-decoration: underline;
      }
    }
  }
  .post {
    width: 30%;
    margin-left: 2%;
    float: left;
    margin-right: 2%;
    ${mq.maxWidth('lg')`
      width: 92%;
      margin-top: 30px;
      margin-left: 8%;
      margin-bottom: 30px;
    `}
    h3 {
      font-size: 23px;
      font-weight: normal;
      margin-bottom: 20px;
    }
    ul {
      li {
        padding: 5%;
        list-style: none;
        img {
          width: 50px;
          height: 50px;
          float: left;
          margin-right: 10%;
        }
        span {
          font-size: 18px;
          line-height: 1.5em;
          margin-top: 10px;
        }
        &:hover {
          background-color: #ccc;
        }
      }
    }
  }
  .tags {
    ${mq.maxWidth('lg')`
      width: 92%;
      margin-left: 8%;
    `}
    h3 {
      font-size: 23px;
      font-weight: normal;
      margin-bottom: 20px;
    }
    span {
      background-color: rgb(100, 100, 100);
      font-weight: 100;
      color: white;
      float: left;
      margin-right: 10px;
      margin-bottom: 15px;
      font-size: 11px;
      padding: 5px;
      letter-spacing: 0.04em;
      &:nth-of-type(1) {
        background-color: black;
        font-size: 15px;
        padding-bottom: 2px;
      }
    }
  }
`;

const Footer = memo(() => {
  return (
    <FooterContainer>
        <div>
          <div className="footer">
              <h3>FOOTER</h3>
              <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
              <br />
              <p>Powered by <a href="#">w3.css</a></p>
          </div>
          <div className="post">
            <h3>BLOG POSTS</h3>
            <ul>
                <li>
                    <img src={post1} alt="post" />
                    <span>Lorem<br />Sed mattis nunc</span>
                </li>
                <br /> <hr />
                <li>
                    <img src={post2} alt="post" />
                    <span>Ipsum<br />Praes tinci sed</span>
                </li>
            </ul>
          </div>
          <div className="tags">
            <h3>POPULAR TAGS</h3>
            <span>Travel</span><span>New York</span><span>Dinner</span><span>Salmon</span><span>France</span><span>Drinks</span><span>Ideas</span><span>Flavors</span><span>Cuisine</span><span>Chicken</span><span>Dressing</span><span>Fried</span><span>Fish</span><span>Duck</span>
          </div>
        </div>
    </FooterContainer>
  );
});

export default Footer;