import React,{memo} from 'react';
import styled from 'styled-components';
import chef from '../../assets/img/chef.jpg';
import mq from '../../MediaQuery';


const ChefContainer = styled.div`
  text-align: center;
  margin: 0;
  width: 100%;
  h3 {
    font-size: 25px;
    margin-bottom: 40px;
    margin-top: 60px;
    font-weight: normal;
  }
  img {
    width: 70%;
    display: block;
    margin: auto;
    margin-bottom: 40px;
    ${mq.maxWidth('lg')`
      width: 98%;
    `}
    ${mq.maxWidth('sm')`
      width: 92%;
      margin: 0;
      margin-left: 5px;
      margin-bottom: 25px;
    `}
  }
  .text {
    margin-bottom: 60px;
    h4 {
      font-size: 22px;
      font-weight: bold;
    }
    h6 {
      margin-bottom: 32px;
      font-style: italic;
      font-size: 18px;
      font-weight: normal;
    }
    p {
      margin: 0 60px;
      ${mq.maxWidth('sm')`
        width: 93%;
        margin: 0;
      `}
    }
  }
`;

const Chef = memo(() => {
  return (
    <ChefContainer>
      <div>
        <h3>About Me, The Food Man</h3>
        <img src={chef} alt='chef' />
        <div className='text'>
          <h4>I am Who I Am!</h4>
            <h6>With Passion For Reat, Good Food</h6>
            <p>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
        </div>
      </div>
    </ChefContainer>
  );
});

export default Chef;