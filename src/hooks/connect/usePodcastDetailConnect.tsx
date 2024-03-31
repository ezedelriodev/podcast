import { useQuery } from "@tanstack/react-query";
import { getApi } from "../../services/api/get-api";
import { DetailPodcast } from "../../types/detailTypes";
import { useParams } from "react-router-dom";

const getPodcastDetail = async (podcastId: string): Promise<DetailPodcast> => {
  const { data } = await getApi.get<DetailPodcast>(
    `/lookup?id=${podcastId}&country=US&media=podcast&entity=podcastEpisode`,
  );
  return data;
};

export const usePodcastDetailConnect = () => {
  const { podcastId = "" } = useParams<{ podcastId: string }>();
  const podcastDetailQuery = useQuery({
    queryKey: ["podcastDetail"],
    queryFn: () => getPodcastDetail(podcastId),
  });

  return podcastDetailQuery;
};
