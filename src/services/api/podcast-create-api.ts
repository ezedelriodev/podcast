import axios from "axios";

export const podcastListApi = axios.create({
  baseURL: "https://itunes.apple.com",
});
