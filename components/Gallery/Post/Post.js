import React, { useState, useEffect } from "react";
import Image from "next/image";
import LikeButton from "./LikeButton/LikeButton";
import { Wrapper, ImageWrapper, ContentWrapper } from "./PostStyles";

const Post = ({ post, url }) => {
  useEffect(() => {
    let liked = localStorage.getItem(JSON.stringify(post));
    if (liked == "true") {
      setLikeIndicate("#FF5656");
    }
  }, []);

  const [likeIndicate, setLikeIndicate] = useState("none");
  const like = (value) => {
    let post = JSON.stringify(value);
    if (localStorage.getItem(post) == "true") {
      localStorage.setItem(post, false);
      setLikeIndicate("none");
    } else {
      localStorage.setItem(post, true);
      setLikeIndicate("#FF5656");
    }
  };

  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={url}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </ImageWrapper>
      <ContentWrapper>
        <div style={{ display: "flex", width: "100%" }}>
          <span style={{ flex: "1" }}>{post.date}</span>
          <div style={{ flex: "1", display: "flex", justifyContent: "right" }}>
            <LikeButton click={() => like(post)} fill={likeIndicate} />
          </div>
        </div>
        <h1>{post.title}</h1>
        {!post.copyright == "" ? <h2>{post.copyright}</h2> : null}
        <p>{post.explanation}</p>
      </ContentWrapper>
    </Wrapper>
  );
};
export default Post;
