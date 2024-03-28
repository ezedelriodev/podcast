import Filter from "../../components/filter/filter";
import PodcastCard from "../../components/podcast-card/podcast-card";
import { usePodcastListConnect } from "../../hooks/connect/usePodcastListConnect";
import "./home.style.css";

const Home = () => {
  const podcastListQuery = usePodcastListConnect();

  const podcastList = podcastListQuery.data?.feed.entry;
  return (
    <div className="home__container">
      <Filter />
      <div className="home__podcastList" data-testid="home_container">
        {podcastList?.map((item) => (
          <PodcastCard podcastItem={item} key={item.id.label} />
        ))}
      </div>
    </div>
  );
};

export default Home;
