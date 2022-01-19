import React, { useState } from "react";
import Post from "./Post/Post";
import styled from "styled-components";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
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

const Gallery = ({ data }) => {
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  const getMorePost = async () => {
    const res = await axios.get("/api/search");
    const newPost = { data: res.data };

    setPosts((post) => [...post, ...newPost.data]);
  };

  // const [newPosts, setNewPosts] = useState([]);
  // const morePosts = async () => {
  //   const res = await axios.get("/api/search");
  //   const post = { data: res.data };
  //   console.log(post.data);
  //   setNewPosts(post.data);
  // };

  return (
    <Wrapper>
      {/* {gallery}
      <button onClick={() => morePosts()}>More posts</button>
      <br />
      {newPosts.map((p, i) => {
        let url = p.url;

        // Checks media type, if it is a video, it uses the thumbnail url.
        if (p.media_type.includes("video")) {
          if (p.url.includes(".html")) {
            return null;
          } else {
            url = p.thumbnail_url;
          }
        }

        return <Post post={p} key={i} url={url} />;
      })} */}
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<h3>Loading...</h3>}
        endMessage={<h4>You scrolled through all of them!</h4>}
      >
        {posts.map((post, i) => {
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
        })}
      </InfiniteScroll>
    </Wrapper>
  );
};
export default Gallery;
