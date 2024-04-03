import { useParams } from "react-router-dom";
import DetailLayout from "../../components/detail-layout/detail-layout";
import Sidebar from "../../components/sidebar/sidebar";
import EpisodePlayer from "../../components/episode-player/episode-player";
import { usePodcastDetailConnect } from "../../hooks/connect/usePodcastDetailConnect";
import "./episode-detail.style.css";
import { Episode, Result } from "../../types/detailTypes";
import { useCallback, useEffect, useState } from "react";
import { getPodcastDetailStorage } from "../../services/local-storage/local-storage";
import LoadingIcon from "../../components/loading-icon/loading-icon";

const EpisodeDetail = () => {
  const { episodeId = "", podcastId } = useParams<{ podcastId: string; episodeId: string }>();
  const { getPodcastDetail } = usePodcastDetailConnect();
  //const { details, episodes } = usePodcastDetailConnect();
  const [details, setDetails] = useState<Result | null>(null);
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  const fetchEpisodeDetail = useCallback(async () => {
    if (!podcastId) return;
    const { detailsQuery, episodesQuery } = await getPodcastDetail(podcastId);

    setDetails(detailsQuery);
    setEpisodes(episodesQuery);
  }, [getPodcastDetail, podcastId]);

  useEffect(() => {
    if (!podcastId) return;
    const podcastStorage = getPodcastDetailStorage(episodeId);
    if (podcastStorage) {
      setDetails(podcastStorage.podcastDetails);
      setEpisodes(podcastStorage.episodes);
    } else {
      fetchEpisodeDetail();
    }
  }, [podcastId, episodeId]);

  if (!details) return <LoadingIcon />;

  return (
    <div className="episode-detail__container">
      <DetailLayout
        sidebar={
          <Sidebar
            id={details.trackId}
            image={details.artworkUrl600}
            title={details.trackName}
            artistName={details?.artistName || ""}
          />
        }
        body={<EpisodePlayer episodes={episodes} episodeId={episodeId} />}
      />
    </div>
  );
};

export default EpisodeDetail;
