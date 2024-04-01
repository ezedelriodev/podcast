import { useQuery } from "@tanstack/react-query";
import { getApi } from "../../services/api/get-api";
import { DetailPodcast, Episode, Result } from "../../types/detailTypes";
import { useParams } from "react-router-dom";

const getPodcastDetail = async (podcastId: string): Promise<DetailPodcast> => {
  try {
    const { data } = await getApi.get<DetailPodcast>(
      `/lookup?id=${podcastId}&country=US&media=podcast&entity=podcastEpisode`,
    );
    return data;
  } catch (error) {
    console.error("Error searching for episodes listing:", error);
    throw error;
  }
};

export const usePodcastDetailConnect = () => {
  const { podcastId = "" } = useParams<{ podcastId: string }>();

  const podcastDetailQuery = useQuery({
    queryKey: ["podcastDetail", podcastId],
    queryFn: () => getPodcastDetail(podcastId),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const details: Result = podcastDetailQuery.data ? podcastDetailQuery.data.results[0] : ({} as unknown as Result);
  const episodes: Episode[] = podcastDetailQuery.data ? podcastDetailQuery.data.results : ([] as unknown as Episode[]);

  return { podcastDetailQuery, details, episodes };
};
