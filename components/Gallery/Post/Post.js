import React from "react";
import Image from "next/image";
import { Wrapper, ImageWrapper, ContentWrapper } from "./PostStyles";

const Post = ({ post, url }) => {
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
            <button>🚀</button>
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
