import { useParams } from "react-router-dom";
import { usePodcastDetailConnect } from "../../hooks/connect/usePodcastDetailConnect";
import DetailLayout from "../../components/detail-layout/detail-layout";
import EpisodesList from "../../components/episodes-list/episodes-list";
import Sidebar from "../../components/sidebar/sidebar";
import detailMocks from "../../mocks/podcastDetail.json";
import "./podcast-detail.style.css";
import { useEffect, useState } from "react";
import { Result } from "../../types/detailTypes";

const episodes = detailMocks.results.splice(1);

const PodcastDetail = () => {
  const { podcastId = "" } = useParams<{ podcastId: string }>();
  const podcastDetailQuery = usePodcastDetailConnect();
  const [details, setDetails] = useState<Result>(podcastDetailQuery.data?.results[0] as Result);

  useEffect(() => {
    if (podcastDetailQuery.data) setDetails(podcastDetailQuery.data?.results[0]);
  }, [podcastDetailQuery]);

  return (
    <div className="podcast-detail__container" style={{ marginTop: 100 }}>
      <DetailLayout
        sidebar={
          <Sidebar
            id={details?.trackId}
            image={details?.artworkUrl600}
            title={details?.trackName}
            artistName={details?.artistName || ""}
          />
        }
        body={<EpisodesList episodes={episodes} podcastId={podcastId} />}
      />
    </div>
  );
};

export default PodcastDetail;
