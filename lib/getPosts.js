import axios from "axios";

export const getPosts = () => {
  return axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&count=5&thumbs=true`
  );
};

export const getRecent = () => {
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  let date = new Date();
  date.setDate(date.getDate() - 2);
  return axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=${
      process.env.API_KEY
    }&start_date=${formatDate(date)}&thumbs=true`
  );
};
