import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  height: auto;
  justify-content: center;
  margin: 2rem auto;
  background-color: #fbf7ed;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  background-color: lightgray;
  margin: auto;
  max-width: 30rem;
  width: 100%;
  height: 30rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

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
