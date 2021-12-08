import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  html {
    @media (max-width: 1070px)
  }

  body {
    background : var(--background);
    -webkit-front-smoothing: antialiased ;
  }
`;
