import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: black;
  padding: 35px 0;
  box-sizing: border-box;
  margin-top: 10px;
  p {
    color: white;
    font-size: 16px;
    text-align: center;
    a {
      color: white;
    }
  }  
`;

const Footer = () => {
  return (
    <FooterContainer>
        <p>
            Powered by <a href="#">w3.css</a>
        </p>
    </FooterContainer>
  );
};

export default Footer;