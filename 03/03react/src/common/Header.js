import React,{memo} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const HeaderContainer = styled.header`
  div {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: white;
    position: fixed;
    top: 0;
    padding: 0 5%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    font-size: 24px;
  }
  
  .material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
    padding: 12px 12px;
    box-sizing: border-box;
    &:hover {
      background-color: #ccc;
    }
  }
`;
const Header = memo(() => {
  return (
    <HeaderContainer>
        <header>
          <div>
            <Link to="/"><span className="material-symbols-outlined">menu</span></Link>
            <p>My Food</p>
            <p>Mail</p>
          </div>
        </header>
    </HeaderContainer>
  );
});

export default Header;