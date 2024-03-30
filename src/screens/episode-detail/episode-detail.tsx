import { useParams } from "react-router-dom";

import DetailLayout from "../../components/detail-layout/detail-layout";
import Sidebar from "../../components/sidebar/sidebar";
import detailMocks from "../../mocks/podcastDetail.json";
import EpisodePlayer from "../../components/episode-player/episode-player";

const details = detailMocks.results[0];
const episodes = detailMocks.results.splice(1);

const EpisodeDetail = () => {
  const { episodeId = "" } = useParams<{ podcastId: string; episodeId: string }>();

  //TODO: Call to service
  //const podcastDetailQuery = usePodcastDetailConnect(podcastId);

  return (
    <div className="podcast-detail__container" style={{ marginTop: 100 }}>
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
