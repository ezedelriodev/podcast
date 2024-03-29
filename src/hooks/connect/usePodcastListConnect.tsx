import { useQuery } from "@tanstack/react-query";
import { getApi } from "../../services/api/get-api";
import { Podcast } from "../../types/listTypes";

const getPodcastList = async (): Promise<Podcast> => {
  const { data } = await getApi.get<Podcast>("/us/rss/toppodcasts/limit=100/genre=1310/json");
  return data;
};

export const usePodcastListConnect = () => {
  const podcastListQuery = useQuery({
    queryKey: ["podcastList"],
    queryFn: getPodcastList,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return podcastListQuery;
};
