// To get api call without exposing api key.
import axios from "axios";
import { getPosts } from "../../lib/getPosts";

const handler = async (req, res) => {
  const results = await getPosts();
  // results.status(200).json{ results.data};
  res.status(200).json(results.data);
};
export default handler;
