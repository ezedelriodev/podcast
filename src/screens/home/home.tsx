import Header from "../../components/header/header";
import PodcastCard from "../../components/podcast-card/podcast-card";
import mock from "../../mocks/podcast-list.json";
import { Entry } from "../../types/types";
import "./home.style.css";

const Home = () => {
  const podcastList: Entry[] = mock.feed.entry;
  return (
    <>
      <Header />
      <div className="home__container" data-testid="home_container">
        {podcastList.map((item) => (
          <PodcastCard podcastItem={item} key={item.id.label} />
        ))}
      </div>
    </>
  );
};

export default Home;
