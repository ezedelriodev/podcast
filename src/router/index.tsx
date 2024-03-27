import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../screens/home/home";
import PodcastDetail from "../screens/podcast-detail/podcast-detail";
import EpisodeDetail from "../screens/episode-detail/episode-detail";

function PodcastRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
      <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodeDetail />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}
export default PodcastRoutes;
