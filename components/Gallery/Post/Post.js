import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Wrapper, ImageWrapper, ContentWrapper } from "./PostStyles";

const Post = ({ post, url }) => {
  useEffect(() => {
    let liked = localStorage.getItem(JSON.stringify(post));
    if (liked == "true") {
      setLikeIndicate("green");
    }
  }, []);

  const [likeIndicate, setLikeIndicate] = useState("");
  const like = (value) => {
    let post = JSON.stringify(value);
    if (localStorage.getItem(post) == "true") {
      localStorage.setItem(post, false);
      setLikeIndicate("");
    } else {
      localStorage.setItem(post, true);
      setLikeIndicate("green");
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
            <button
              onClick={() => like(post)}
              style={{ backgroundColor: likeIndicate }}
            >
              🚀
            </button>
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
