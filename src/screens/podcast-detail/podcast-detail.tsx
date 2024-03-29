//import { useParams } from "react-router-dom";
//import { usePodcastDetailConnect } from "../../hooks/connect/usePodcastDetailConnect";
import DetailLayout from "../../components/detail-layout/detail-layout";
import Sidebar from "../../components/sidebar/sidebar";
import detailMocks from "../../mocks/podcastDetail.json";
import "./podcast-detail.style.css";

const details = detailMocks.results[0];

const PodcastDetail = () => {
  //const { podcastId = "" } = useParams<{ podcastId: string }>();

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
      />
    </div>
  );
};

export default PodcastDetail;
