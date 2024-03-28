import { useParams } from "react-router-dom";

const PodcastDetail = () => {
  const { podcastId } = useParams<{ podcastId: string }>();

  console.log({ podcastId });
  return <div style={{ marginTop: 100 }}>PodcastDetail</div>;
};

export default PodcastDetail;
