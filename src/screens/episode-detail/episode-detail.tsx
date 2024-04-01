import { useParams } from "react-router-dom";
import DetailLayout from "../../components/detail-layout/detail-layout";
import Sidebar from "../../components/sidebar/sidebar";
import EpisodePlayer from "../../components/episode-player/episode-player";
import { usePodcastDetailConnect } from "../../hooks/connect/usePodcastDetailConnect";
import "./episode-detail.style.css";

const EpisodeDetail = () => {
  const { episodeId = "" } = useParams<{ podcastId: string; episodeId: string }>();
  const { details, episodes } = usePodcastDetailConnect();

  return (
    <div className="episode-detail__container">
      <DetailLayout
        sidebar={
          <Sidebar
            id={details.trackId}
            image={details.artworkUrl600}
            title={details.trackName}
            artistName={details.artistName || ""}
          />
        }
        body={<EpisodePlayer episodes={episodes} episodeId={episodeId} />}
      />
    </div>
  );
};

export default EpisodeDetail;
