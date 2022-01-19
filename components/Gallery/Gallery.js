import React from "react";
import Post from "./Post/Post";
import styled from "styled-components";
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 4rem;
  min-height: 100vh;
  width: 100%;
  background-color: #fbf7ed;
  z-index: 2;
  opacity: 0.8;
  background-image: radial-gradient(gray 0.3px, #fbf7ed 0.5px);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
`;

const Gallery = ({ data: posts }) => {
  const gallery = posts.map((post, i) => {
    let url = post.url;

    // Checks media type, if it is a video, it uses the thumbnail url.
    if (post.media_type.includes("video")) {
      /** Some urls contain html instead of an image, causes site to crash and has no thumbnail...
      therefore having to exclude it from the gallery. */
      if (post.url.includes(".html")) {
        return null;
      } else {
        url = post.thumbnail_url;
      }
    }

    return <Post post={post} key={i} url={url} />;
  });

  return <Wrapper>{gallery}</Wrapper>;
};
export default Gallery;
