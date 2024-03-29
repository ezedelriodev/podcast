import { useQuery } from "@tanstack/react-query";
import { getApi } from "../../services/api/get-api";
import { DetailPodcast } from "../../types/detailTypes";

const getPodcastDetail = async (podcastId: string): Promise<DetailPodcast> => {
  const { data } = await getApi.get<DetailPodcast>(
    "/lookup?id=1535809341&country=US&media=podcast&entity=podcastEpisode",
  );
  return data;
};

export const usePodcastDetailConnect = (podcastId: string) => {
  const podcastDetailQuery = useQuery({
    queryKey: ["podcastDetail"],
    queryFn: () => getPodcastDetail(podcastId),
  });

  return podcastDetailQuery;
};

// const { podcastDetails, episodes } = getPodcastDetails(podcastId);
// const API_BASE_URL = "https://itunes.apple.com/";

// export const getPodcastDetails = async (podcastId: string): Promise<{ podcastDetails: any; episodes: any[] }> => {
//   try {
//     const response = await axios.get(
//       `${API_BASE_URL}lookup?id=${podcastId}&country=US&media=podcast&entity=podcastEpisode`,
//     );
//     const data = response.data.results[0];
//     const podcastDetails: any = {
//       id: data.trackId,
//       title: data.trackName,
//       artistName: data.artistName,
//       collectionName: data.collectionName,
//       genre: data.genre,
//       releaseDate: data.releaseDate,
//       description: data.description,
//       artwork: data.artworkUrl600,
//       trackCount: data.trackCount,
//     };
//     const episodes: any[] = response.data.results.slice(1);
//     return { podcastDetails, episodes };
//   } catch (error) {
//     console.error("Error fetching podcast details:", error);
//     throw error;
//   }
// };
