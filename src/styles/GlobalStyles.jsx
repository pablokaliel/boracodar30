import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    width:100%;
    height:100%;
    color:#fff;
  }

  #root,
  html,
  body {
    width: 100%;
    height: 100vh;
    font-family: Outfit;
  }

  button {
    cursor:pointer;
  }
`;
