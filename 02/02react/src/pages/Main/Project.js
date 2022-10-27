import React,{memo} from 'react';
import styled from 'styled-components';
import img01 from '../../assets/img/house5.jpg';
import img02 from '../../assets/img/house2.jpg';
import img03 from '../../assets/img/house3.jpg';
import img04 from '../../assets/img/house4.jpg';
import img05 from '../../assets/img/house2.jpg';
import img06 from '../../assets/img/house5.jpg';
import img07 from '../../assets/img/house4.jpg';
import img08 from '../../assets/img/house3.jpg';
import mq from '../../MediaQuery';

const ProjectContainer = styled.div`
  margin: auto;
  width: 94%;
  
  h3 {
    margin-top: 70px;
    letter-spacing: 0.1em;
    font-size: 20px;
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
  
  .content {
    margin-top: 40px;
    width: 100%;
    figure {
      position: relative;
      display: flex;
      float: left;
      margin-right: 1.5%;
      margin-bottom: 1.5%;
      width: 23.85%;
      height: 10%;
      ${mq.maxWidth('lg')`
        float: left;
        width: 44.5%;
        margin: 0;
        margin-right: 15px;
        margin-bottom: 15px;
        margin-left: 3%;
      `}
      ${mq.maxWidth('sm')`
        margin: 0;
        width: 92%;
        margin-left: 3%;
        margin-bottom: 15px;
      `};
      
     
      img {
        width: 100%;
        height: 10%;
        ${mq.maxWidth('lg')`
          width: 100%;
          height: 10%;
        `}
        ${mq.maxWidth('sm')`
          width: 100%;
          height: 270px;
        `}
        
      }
      &:nth-child(4),&:nth-child(8) {
        margin-right: 0;
      }
      .content figure:nth-child(2),.content figure:nth-child(4),.content figure:nth-child(6),.content figure:nth-child(8) {
        ${mq.maxWidth('lg')`
          margin-right: 0;
        `}
      }
      
      figcaption {
        position: absolute;
        left: 0%;
        top: 0%;
        transform: translate(0,0);
        color: white;
        background-color: rgba(0,0,0,.8);
        font-size: 14px;
        padding: 15px;
      }
    }
  }
`;

const imgList = [
  {img: img01, title: 'Summer House'},
  {img: img02, title: 'Brick House'},
  {img: img03, title: 'Renovated'},
  {img: img04, title: 'Barn House'},
  {img: img05, title: 'Summer House'},
  {img: img06, title: 'Brick House'},
  {img: img07, title: 'Renovated'},
  {img: img08, title: 'Barn House'}
];

const Project = memo(() => {
  return (
    <ProjectContainer>
      <div>
        <h3>Projects</h3>
        <hr />
        <div className="content">
          {imgList.map((v,i) => {
            return (
              <figure key={i}>
                  <img src={v.img} alt={v.title} />
                  <figcaption>{v.title}</figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </ProjectContainer>
  );
});

export default Project;