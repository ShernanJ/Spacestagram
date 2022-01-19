import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  html, body {
    margin: 0;
    padding: 0;
    background-color: #FBF7ED;
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
