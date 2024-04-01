import { ChangeEvent, useEffect, useState } from "react";
import Filter from "../../components/filter/filter";
import PodcastCard from "../../components/podcast-card/podcast-card";
import { usePodcastListConnect } from "../../hooks/connect/usePodcastListConnect";
import "./home.style.css";
import { Entry } from "../../types/listTypes";

const Home = () => {
  const podcastListQuery = usePodcastListConnect();
  const [filteredPodcastList, setFilteredPodcastList] = useState<Entry[]>([]);
  const [podcastList, setPodcastList] = useState<Entry[]>([]);

  useEffect(() => {
    if (podcastListQuery.data) {
      setFilteredPodcastList(podcastListQuery.data.feed.entry);
      setPodcastList(podcastListQuery.data.feed.entry);
    }
  }, [podcastListQuery.data]);

  const filterPodcastList = (filterBy: string) => {
    const filtered = podcastList.filter(
      (podcast) =>
        podcast["im:name"].label.toLowerCase().includes(filterBy) ||
        podcast["im:artist"].label.toLowerCase().includes(filterBy),
    );
    if (podcastListQuery.data) setFilteredPodcastList(filtered);
  };

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const filterBy = event.target.value.toLowerCase();
    filterPodcastList(filterBy);
  };

  return (
    <>
      {!!filteredPodcastList.length && (
        <div className="home__container">
          <Filter handleFilterChange={handleFilterChange} listLength={filteredPodcastList.length} />

          <div className="home__podcastList" data-testid="home_container">
            {filteredPodcastList?.map((item) => (
              <PodcastCard podcastItem={item} key={item.id.label} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
