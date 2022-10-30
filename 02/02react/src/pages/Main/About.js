import React,{memo} from 'react';
import styled from 'styled-components';
import team01 from '../../assets/img/team2.jpg';
import team02 from '../../assets/img/team1.jpg';
import team03 from '../../assets/img/team3.jpg';
import team04 from '../../assets/img/team4.jpg';
import mq from '../../MediaQuery';

const AboutContainer = styled.div`
  margin: auto;
  clear: both;
  width: 94%;
  h3 {
    margin-top: 70px;
    letter-spacing: 0.1em;
    padding-top: 40px; 
    font-size: 22px; 
    margin-bottom: 30px;
    font-weight: normal;
    ${mq.maxWidth('lg')`
      margin-left: 3%;
    `}
    ${mq.maxWidth('sm')`
      margin-left: 3%;
    `}
  }
  hr {
    width: 94%;
    border: 0.1px solid #eee;
  }
  p {
    width: 94%;
    margin-top: 20px; 
    font-size: 17px; 
    line-height: 1.5em;
    letter-spacing: 0.1em;
    ${mq.maxWidth('lg')`
      font-size: 14px;
      letter-spacing: 0;
      margin-left: 3%;
    `}
  }
  .members {
    float: left;
    width: 23.8%; 
    margin-top: 40px; 
    margin-right: 1.5%;
    ${mq.maxWidth('lg')`
      width: 45.5%;
      margin: 0;
      margin-right: %;
      margin-left: 3%;
    `}
    ${mq.maxWidth('sm')`
      width: 94%;
      margin: 0;
      margin-top: 30px;
      margin-left: 3.5%;
    `}
    &:last-child {
      margin-right: 0;
      ${mq.maxWidth('lg')`
        margin-bottom: 70px;
      `}
    }
    &:nth-child(2),&:nth-child(4) {
      ${mq.maxWidth('lg')`
        margin-right: 0;
      `}
    }
    img {
      filter: grayscale(70%);
      width: 100%;
      ${mq.maxWidth('lg')`
        width: 100%;
      `}
    }
    h3 {
      margin-top: 0; 
      font-size: 21px; 
      line-height: 0.1em;
    }
    span {
      margin-top: 0; 
      font-size: 18px; 
      color: #aaa;
      letter-spacing: 0.1em;
      margin-left: 2.5%;
    }
    p {
      margin-top: 15px; 
      letter-spacing: 0.1em;
      line-height: 1.3em;
      font-size: 16px;
    }
    button {
      border: 0; 
      width: 100%; 
      height: 50px; 
      font-size: 20px;
      margin-top: 20px; 
      margin-bottom: 100px;
      &:hover {
        background-color: rgba(0,0,0,.3);
      }
      ${mq.maxWidth('lg')`
        margin: 0;
        width: 100%;
        margin-top: 20px;
        margin-bottom: 30px;      
      `}
    }
  }
`;

const teamList = [
  {img: team01, name: 'John Doe', job: 'CEO & Founder'},
  {img: team02, name: 'Jane Doe', job: 'Architect'},
  {img: team03, name: 'Mike Ross', job: 'Architect'},
  {img: team04, name: 'Dan Star', job: 'Architect'}
];

const About = memo(() => {
  return (
    <AboutContainer>
      <div>
        <h3>About</h3>
        <hr/>
        <p className='default'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
        <div className='team'>
          {teamList.map((v,i) => {
            return (
              <div className='members' key={i}>
                <img src={v.img} alt={v.name} />
                <h3>{v.name}</h3>
                <span>{v.job}</span>
                <p>Phasellus sky enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <button>Contact</button>
              </div>
            )
          })}
        </div>
      </div>
    </AboutContainer>
  );
});

export default About;