import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { quotes } from "../InspirationQuotes";

export const Wrapper = styled.article`
  font-family: "Open Sans";
  margin-top: 60px;
  min-height: 43vh;
  height: auto;
  width: 100%;
`;

export const ImageContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 43vh;
  height: auto;
  max-width: 100%;
  z-index: 0;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 43vh;
  height: auto;
  width: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.4);
  transition: background-color 0.2s ease-out;
  box-shadow: inset 0px 0px 30px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transition: background-color 0.2s ease-out;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const Quote = styled.span`
  font-weight: 500;
  font-size: 2rem;
  padding: 4rem;
  color: white;
  text-align: center;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  & span {
    font-weight: 300;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 760px) {
    font-size: 1.5rem;
    & span {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 460px) {
    font-size: 1rem;
    & span {
      font-size: 0.8rem;
    }
  }
  }
`;

const APOD = ({ data: apod }) => {
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * 50)]);

  return (
    <Wrapper>
      <ImageContainer
        style={{
          position: "absolute",
          height: "43vh",
          width: "100%",
          maxHeight: "43vh",
          maxWidth: "100%",
        }}
      >
        <ImageOverlay
          onClick={() => setQuote(quotes[Math.floor(Math.random() * 50)])}
        >
          <Quote>
            {quote.q} <br />- <span>{quote.a}</span>
          </Quote>
        </ImageOverlay>
        <Image
          src={apod.hdurl}
          layout="fill"
          objectFit="cover"
          objectPosition="center top"
          alt="APOD HD"
          priority
        />
      </ImageContainer>
    </Wrapper>
  );
};
export default APOD;
