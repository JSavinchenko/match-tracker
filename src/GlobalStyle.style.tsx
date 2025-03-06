import {createGlobalStyle} from 'styled-components';

import {Colors} from './constants/colors';

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    background-color: ${Colors.BACKGROUND};
  }

  #root {
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${Colors.TEXT};
    font-family: Inter, sans-serif;
  }

  @font-face {
    font-family: 'Tactic Sans';
    src: url('/fonts/TacticSansBoldItalic.woff2') format('woff2');
  }
`;
