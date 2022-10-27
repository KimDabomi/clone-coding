import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import About from './About';
import Contact from './Contact';
import architect from '../../assets/img/architect.jpg';
import mq from '../../MediaQuery';


const MainContainer = styled.section`
  figure{
    display: flex;
    position: relative;
    width: 100%;
    margin: 0;
    img {
      width: 100%;
    }
    figcaption {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-size: 34px;
    letter-spacing: 0.15em;
    color: white;

      span:first-child {
        font-weight: bolder;
        background-color: black;
        padding: 10px 17px;
        filter: opacity(0.8);
      }
      span:last-child {
        ${mq.maxWidth('sm')`
          display: none;
        `}
      }
    }
  }
`;


const Main = () => {
  return (
    <MainContainer>
        <figure>
          <img src={architect} alt='architect' />
          <figcaption><span>BR</span><span> Architects</span></figcaption>
        </figure>
        <Project />
        <About />
        <Contact />
    </MainContainer>
  )
}

export default Main;