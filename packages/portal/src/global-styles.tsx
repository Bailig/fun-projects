import { createGlobalStyle } from "styled-components";
import ozCaramel from "./assets/OzCaramel.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: OzCaramel;
    src: url(${ozCaramel});
  }

  body {
    margin: 0;
    font-family: OzCaramel, sans-serif;
  }

  button {
    background-color: transparent;
    outline: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }
`;
