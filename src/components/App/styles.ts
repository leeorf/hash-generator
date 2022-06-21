import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100vh;
  }

  body {
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #e9ecf7;
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction:column;
  }
`;

export const Content = styled.main`
  flex: 1;
`;
