import { useParams } from "react-router-dom";
import { usePodcastDetailConnect } from "../../hooks/connect/usePodcastDetailConnect";
import DetailLayout from "../../components/detail-layout/detail-layout";
import EpisodesList from "../../components/episodes-list/episodes-list";
import Sidebar from "../../components/sidebar/sidebar";
import LoadingIcon from "../../components/loading-icon/loading-icon";
import "./podcast-detail.style.css";

const PodcastDetail = () => {
  const { podcastId = "" } = useParams<{ podcastId: string }>();
  const { podcastDetailQuery, details, episodes } = usePodcastDetailConnect();

  return (
    <>
      {podcastDetailQuery.isFetching && <LoadingIcon />}
      <div className="podcast-detail__container">
        <DetailLayout
          sidebar={
            <Sidebar
              id={details.trackId}
              image={details.artworkUrl600}
              title={details.trackName}
              artistName={details.artistName || ""}
            />
          }
          body={<EpisodesList episodes={episodes} podcastId={podcastId} />}
        />
      </div>
    </>
  );
};

export default PodcastDetail;
