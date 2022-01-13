import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  html, body {
    
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
