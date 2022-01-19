import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { quotes } from "../InspirationQuotes";

export const Wrapper = styled.article`
  height: 43vh;
  width: 100%;
`;

export const ImageContainer = styled.section`
  position: relative;
  height: 43vh;
  width: 100%;
  max-height: 43vh;
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
  height: 43vh;
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
  font-size: 2rem;
  padding: 4rem;
  color: white;
  text-align: center;

  & span {
    font-size: 1.5rem;
  }
`;

const APOD = ({ data: apod }) => {
  var quote = quotes[Math.floor(Math.random() * 50)];

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
        <ImageOverlay>
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
