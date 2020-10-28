import { createGlobalStyle } from 'styled-components'
import { rgba } from 'polished'

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    background: ${props => props.theme.colors.themeColors.background.dark};
    overflow: hidden;

    width: 100%;
    min-height: 100vh;
    height: 100%;
    max-height: 100%;

    display: flex;
  }

  body {
    color: ${props => props.theme.colors.themeColors.text.normal};
  }

  body, input, button, select {
    font: 500 16px Poppins;
    outline: none;
    /* color:  ${props => props.theme.colors.themeColors.text} */
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.themeColors.text};
    font-family: Poppins;
  }
  
  *::-webkit-scrollbar-track,
  *::-webkit-scrollbar-corner,
  *::-webkit-resizer,
  *::-webkit-scrollbar-button
  {
      width: 100%;
      height: 100%;
      background: ${props => props.theme.colors.themeColors.background.dark};
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  *::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      background: transparent;
      overflow: visible;
  }
  *::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.blue};
      border-radius: 50px;
  }
`

export default GlobalStyle
