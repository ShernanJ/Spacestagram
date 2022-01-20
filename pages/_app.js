import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  html, body {
    font-family: "Open Sans", "sans-serif";
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  body {
    background-color: #fbf7ed;
  background-image: radial-gradient(gray 0.5px; #fbf7ed 0.5px);
  background-size: 20px 20px;
  background-position: 0 0; 10px 10px;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
