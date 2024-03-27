import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./screens/home/home";
import PodcastDetail from "./screens/podcast-detail/podcast-detail";
import EpisodeDetail from "./screens/episode-detail/episode-detail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
        <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodeDetail />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
export default App;
