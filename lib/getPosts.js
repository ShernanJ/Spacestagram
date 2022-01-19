import axios from "axios";

export const getPosts = () => {
  return axios.get(
    // `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&count=5&thumbs=true`
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&start_date=2021-08-01&end_date=2021-08-18&thumbs=true`
  );
};
