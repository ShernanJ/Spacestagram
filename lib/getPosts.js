import axios from "axios";

export const getPosts = () => {
  return axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&count=5&thumbs=true`
  );
};
