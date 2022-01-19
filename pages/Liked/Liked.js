import React from "react";

const liked = () => {
  let data = localStorage.getItem("liked");

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export default liked;
