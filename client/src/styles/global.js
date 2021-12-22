import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`        
  /* apply a natural box layout model to all elements, but allowing components to change */
  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, SansSerif, serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
