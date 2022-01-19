import React from "react";
import Head from "next/head";
import APOD from "../components/APOD/APOD";
import axios from "axios";
import styled from "styled-components";
import Image from "next/image";
export const Cover = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: #fbf7ed;
  z-index: 2;
`;

const Home = ({ data: apod, today }) => {
  let posts = apod;

  const gallery = posts.map((post, i) => (
    <div key={i}>
      <div
        style={{
          position: "relative",
          width: "auto",
          height: "30rem",
          maxWidth: "30rem",
          margin: "20px",
          backgroundColor: "lightcoral",
        }}
      >
        <Image
          src={post.url}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <span>{post.date}</span>
      <h1>{post.title}</h1>
      <h2>{post.copyright}</h2>
      <p>{post.explanation}</p>
      <button>Like</button>
    </div>
  ));

  return (
    <>
      <Head>
        <title>Shopify Challenge</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <nav>
        <ul>
          <li>
            <a href="/">Spacestagram</a>
          </li>
        </ul>
      </nav>
      <main>
        <APOD data={today} />
        <Cover>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {gallery}
          </div>
        </Cover>
      </main>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { count } = context.query;

  const today = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`
  );
  const res = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&count=${
      !isNaN(count) ? count : 10
    }&thumbs=true`
  );

  return {
    props: { data: res.data, today: today.data },
  };
};
export default Home;
