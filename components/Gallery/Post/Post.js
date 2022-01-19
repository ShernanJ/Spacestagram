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
        <button>Like</button>
        <span>{post.date}</span>
        <h1>{post.title}</h1>
        <h2></h2>
        <p>{post.explanation}</p>
      </ContentWrapper>
    </Wrapper>
  );
};
export default Post;
