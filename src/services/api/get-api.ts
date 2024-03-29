import axios from "axios";

export const getApi = axios.create({
  baseURL: "https://itunes.apple.com",
});
