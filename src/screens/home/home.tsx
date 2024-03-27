import Filter from "../../components/filter/filter";
import PodcastCard from "../../components/podcast-card/podcast-card";
import mock from "../../mocks/podcast-list.json";
import { Entry } from "../../types/types";
import "./home.style.css";

const Home = () => {
  const podcastList: Entry[] = mock.feed.entry;
  return (
    <div className="home__container">
      <Filter />
      <div className="home__podcastList" data-testid="home_container">
        {podcastList.map((item) => (
          <PodcastCard podcastItem={item} key={item.id.label} />
        ))}
      </div>
    </div>
  );
};

export default Home;
