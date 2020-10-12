import { createGlobalStyle } from 'styled-components'

import colors from '../styles/colors'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    color: ${colors.primary};
    background: ${colors.bg_gray};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 16px Nunito, sans-serif;
  }
  
  button {
    cursor: pointer;
    border: 0;
  }
`