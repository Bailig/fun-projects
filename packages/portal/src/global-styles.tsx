import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
  }

  button {
    background-color: transparent;
    outline: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
    &:active {
      color: inherit
    }
    &:focus {
      outline: none;
      outline-offset: 0;
    }
  }
`;
