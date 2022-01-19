import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  html, body {
    font-family: "Open Sans", "sans-serif";
    margin: 0;
    padding: 0;
    background-color: #FBF7ED;
    overflow-x: hidden;
  }

  //Add fonts here later
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
