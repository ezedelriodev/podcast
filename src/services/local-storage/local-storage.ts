//import { Episode, PodcastDetails } from "../types";

import { DetailPodcast } from "../../types/detailTypes";
import { Podcast } from "../../types/listTypes";

const LIST_KEY = "podcastList";
const DETAIL_KEY = "podcastDetail";

export const savePodcastListStorage = (data: Podcast) => {
  const currentTime = new Date().getTime();
  const dataToStore = { data, timestamp: currentTime };
  localStorage.setItem(LIST_KEY, JSON.stringify(dataToStore));
};

export const getPodcastListStorage = () => {
  const storedData = localStorage.getItem(LIST_KEY);
  if (storedData) {
    const { data, timestamp } = JSON.parse(storedData);
    const currentTime = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000;
    if (currentTime - timestamp < oneDay) {
      return data;
    }
  }
  return null;
};

export const savePodcastDetailStorage = (podcastId: string, data: DetailPodcast) => {
  const storedDataJson = localStorage.getItem(DETAIL_KEY);
  let storedData = storedDataJson ? JSON.parse(storedDataJson) : {};

  const currentTime = new Date().getTime();
  const dataToStore = { data, timestamp: currentTime };

  storedData[podcastId] = dataToStore;

  localStorage.setItem(DETAIL_KEY, JSON.stringify(storedData));
};

export const getPodcastDetailStorage = (podcastId: string) => {
  const storedDataJson = localStorage.getItem(DETAIL_KEY);

  if (storedDataJson) {
    const storedData = JSON.parse(storedDataJson);

    if (!storedData[podcastId]) {
      return null;
    }

    const podcastDetail = storedData[podcastId];
    const { timestamp } = podcastDetail;

    const currentTime = new Date().getTime();
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

    if (currentTime - timestamp < oneDayInMilliseconds) {
      return podcastDetail;
    }
  }

  return null;
};
