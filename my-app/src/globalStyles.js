import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: rgb(180,212,229);
    --darker: rgb(144,192,216);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input, button {
    border: none;
    background: transparent;
    &:focus {
      outline: none;
    }
  }

  ul, ul {
    list-style: none;
  }
`

export default GlobalStyle