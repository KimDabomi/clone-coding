import React,{memo} from 'react';
import styled from 'styled-components';
import Food from './Food';
import List from './List';
import Chef from './Chef';


const MainContainer = styled.div`
  padding-left: 6%;
  box-sizing: border-box;
  margin-top: 110px;
`;



const Main = memo(() => {
  return (
    <MainContainer>
      <Food />
      <List />
      <hr />
      <Chef />
      <hr />
    </MainContainer>
  );
});

export default Main;