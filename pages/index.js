import React from "react";
import Head from "next/head";
import APOD from "../components/APOD/APOD";
import axios from "axios";
import Gallery from "../components/Gallery/Gallery";

const Home = ({ gallery, today }) => {
  return (
    <>
      <Head>
        <title>Shopify Challenge</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <nav
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "99",
          backgroundColor: "#fbf7ed",
          backgroundImage: "radial-gradient(gray 0.3px, #fbf7ed 0.5px)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 10px 10px",
          height: "60px",
          width: "100%",
          boxShadow:
            "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)",
          // borderBottom: "1px solid black",
        }}
      >
        <ul style={{ listStyle: "none" }}>
          <li style={{ fontSize: "24px", fontWeight: "bold" }}>Spacestagram</li>
        </ul>
      </nav>
      <main>
        <APOD data={today} />
        <Gallery data={gallery} />
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
      !isNaN(count) ? (count <= 30 && count > 0 ? count : 10) : 10
    }&thumbs=true`
  );
  //Used to test date ranges
  // const res = await axios.get(
  //   `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&start_date=2021-08-01&end_date=2021-08-18&thumbs=true`
  // );

  return {
    props: { gallery: res.data, today: today.data },
  };
};
export default Home;
