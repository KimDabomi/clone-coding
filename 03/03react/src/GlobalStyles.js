import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  *{
    font-family: "Karma", sans-serif;
    padding: 0;
    margin: 0;
  }

  hr {
    border: 0;
    border-top: 1px solid #ddd;
    width: 98%;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyles;