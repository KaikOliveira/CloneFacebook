import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #EcEcEc;
    color: #222;
    -webkit-font-smoothing: antialiased;
    max-width: 100vw;
    max-height: 100vh;
  }
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px
  }
  button {
    cursor: pointer;
  }
`;