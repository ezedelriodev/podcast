import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";
import Home from "../screens/home/home";
import Header from "../components/header/header";
import PodcastDetail from "../screens/podcast-detail/podcast-detail";
import EpisodeDetail from "../screens/episode-detail/episode-detail";

function PodcastRoutes() {
  return (
    <Routes>
      <Router>
        <Header />
        <Route path="/" element={<Home />} />
        <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
        <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodeDetail />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Router>
    </Routes>
  );
}
export default PodcastRoutes;
