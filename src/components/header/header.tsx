import { Link } from "react-router-dom";
import "./header.style.css";
import LoadingIcon from "../loading-icon/loading-icon";
import { usePodcastListConnect } from "../../hooks/connect/usePodcastListConnect";

const Header = () => {
  const podcastListQuery = usePodcastListConnect();

  return (
    <header className="header__container">
      <Link to="/" className="header__link">
        Podcaster
      </Link>
      {podcastListQuery.isLoading && <LoadingIcon />}
    </header>
  );
};

export default Header;
