// globalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Global reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${(props) => props.theme.fontFamily}, sans-serif; /* Dynamically set from theme */
    color: ${(props) => props.theme.colors.text}; /* Dynamically set from theme */
    background-color: ${(props) => props.theme.colors.background}; /* Dynamically set from theme */
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.colors.accent}; /* Dynamically set from theme */
    font-weight: bold;
  }

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    background-color: ${(props) => props.theme.colors.buttonBackground}; /* Dynamically set from theme */
    color: ${(props) => props.theme.colors.buttonText}; /* Dynamically set from theme */
    border: none;
    padding: 0.5em 1em;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.colors.buttonHover}; /* Dynamically set from theme */
    }
  }
`;

// Assuming you have a 'theme.ts' file to import from
// You might need to adjust or define your theme structure accordingly
