import React,{memo} from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  clear: both;
  text-align: center;
  margin-bottom: 60px;
  a {
    display: inline-block;
    font-size: 16px;
    width: 40px;
    height: 40px;
    padding: 15px 0 0 15px;
    box-sizing: border-box;
    letter-spacing: 1.15em;
    text-align: center;
    &:hover, &:nth-child(2) {
      background-color: black;
      color: white;
    }
  }
`;
const List = memo(() => {
  return (
    <ListContainer>
      <div>
        <a href='#'>&laquo;</a>
        <a href='#'>1</a>
        <a href='#'>2</a>
        <a href='#'>3</a>
        <a href='#'>4</a>
        <a href='#'>&raquo;</a>
      </div>
    </ListContainer>
  )
});

export default List;