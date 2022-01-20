import React from "react";

import styled from "styled-components";

export const Wrapper = styled.div`
  & svg path {
    transition: all 0.3s;
  }
  &:hover {
    transition: all 0.3s;
    cursor: pointer;
    & svg path {
      stroke: #ffb4b4;
      transition: all 0.3s;
    }
  }
`;

const LikeButton = (props) => {
  return (
    <Wrapper onClick={props.click} onMouseEnter={props.liked}>
      <svg
        width="29"
        height="26"
        viewBox="0 0 29 26"
        fill={props.fill}
        style={{ transition: "all 0.3s" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.4792 11.9615L26.4794 11.9612C27.7308 9.55081 27.8999 7.29807 27.3241 5.42394C26.7499 3.55517 25.447 2.10378 23.8298 1.27573C22.2127 0.447727 20.2737 0.239071 18.4237 0.86192C16.7846 1.41376 15.2464 2.60736 14.0703 4.5407C12.8942 2.60736 11.3559 1.41376 9.71686 0.86192C7.86688 0.239071 5.92786 0.447727 4.31074 1.27573C2.69354 2.10378 1.39062 3.55517 0.816457 5.42394C0.24065 7.29807 0.409752 9.55081 1.66119 11.9612L1.66134 11.9615C2.78551 14.1233 4.83041 16.6416 6.98483 18.9808C9.14681 21.3283 11.4493 23.5274 13.1166 25.0542L13.1192 25.0566C13.6648 25.5491 14.4944 25.5491 15.04 25.0566L15.04 25.0566L15.0437 25.0533C16.7011 23.5269 18.9987 21.328 21.1582 18.9806C23.3102 16.6416 25.3551 14.1233 26.4792 11.9615Z"
          stroke="#242424"
        />
      </svg>
    </Wrapper>
  );
};
export default LikeButton;
