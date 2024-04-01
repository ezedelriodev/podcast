import { Link } from "react-router-dom";
import "./header.style.css";
import LoadingIcon from "../loading-icon/loading-icon";
import { usePodcastListConnect } from "../../hooks/connect/usePodcastListConnect";
import { usePodcastDetailConnect } from "../../hooks/connect/usePodcastDetailConnect";

const Header = () => {
  const podcastListQuery = usePodcastListConnect();
  const { podcastDetailQuery } = usePodcastDetailConnect();

  return (
    <header className="header__container">
      <Link to="/" className="header__link">
        Podcaster
      </Link>
      {(podcastDetailQuery.isFetching || podcastListQuery.isFetching) && <LoadingIcon />}
    </header>
  );
};

export default Header;
