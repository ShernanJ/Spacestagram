import React from "react";
import styled from "styled-components";
import Head from "next/head";
import axios from "axios";
import { getRecent } from "../lib/getPosts";

import Navigation from "../components/Navigation/Navigation";
import APOD from "../components/APOD/APOD";
import Gallery from "../components/Gallery/Gallery";

export const Content = styled.div``;

const Home = ({ gallery, today }) => {
  return (
    <>
      <Head>
        <title>Shopify Challenge</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      <main>
        <APOD data={today} />
        <Content>
          <Gallery data={gallery} />
        </Content>
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  const today = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`
  );
  const res = await getRecent();

  return {
    props: { gallery: res.data, today: today.data },
  };
};
export default Home;
