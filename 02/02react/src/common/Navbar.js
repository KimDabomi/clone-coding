import React,{memo} from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import mq from '../MediaQuery';


const NavbarContainer = styled.nav`
    width: 100%;
    position: fixed;
    padding: 0 10px 10px;
    box-sizing: border-box;
    z-index: 9999;
    background-color: #fff;
    box-shadow: 0.5px 0.5px 5px gray;
    font-size: 17px;
    top: 0;

    div {
        margin-top: 10px;
        width: 100%;
        
        .left {
            float: left;
            letter-spacing: 0.2em;
            padding: 5px 15px;

            box-sizing: border-box;   
            text-decoration: none;
            color: black;
            &:hover {
                background-color: #ccc;
            }
            span {
                font-weight: bold;
            }
        }
        .link {
            a {
                float: right;
                padding: 5px 15px;
                box-sizing: border-box;
                color: black;
                text-decoration: none;
                letter-spacing: 0.2em;
            }
            ${mq.maxWidth('sm')`
                display: none;
            `}
        }
    }
`;
const Navbar = memo(() => {
  return (
    <NavbarContainer>
        <div>
            <NavLink to="/" className="left"><span>BR</span> Architects</NavLink>
            <div className='link'>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/project">Projects</NavLink>
            </div>
        </div>
    </NavbarContainer>
  );
});

export default Navbar;