import { useQuery } from "@tanstack/react-query";
import { podcastListApi } from "../../services/api/podcast-list-api";
import { PostCasts } from "../../types/types";

const getPodcastList = async (): Promise<PostCasts> => {
  const { data } = await podcastListApi.get<PostCasts>("/us/rss/toppodcasts/limit=100/genre=1310/json");
  return data;
};

export const usePodcastListConnect = () => {
  const podcastListQuery = useQuery({
    queryKey: ["podcastList"],
    queryFn: getPodcastList,
  });

  return podcastListQuery;
};
