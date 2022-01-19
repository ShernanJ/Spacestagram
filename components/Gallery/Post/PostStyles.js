import styled from "styled-components";

export const Wrapper = styled.article`
  font-family: "sans-serif";
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  height: auto;
  justify-content: center;
  margin: 2rem auto;
  background-color: #fbf7ed;
  border: 1px #242424 solid;
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin: auto;
  max-width: 30rem;
  width: 100%;
  height: 30rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  & h1,
  & h2 {
    margin: 0;
  }

  & h1 {
    font-size: 2rem;
  }
  & h2 {
    font-size: 1rem;
  }
`;
