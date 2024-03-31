import { Link } from "react-router-dom";
import "./header.style.css";
import LoadingIcon from "../loading-icon/loading-icon";

const Header = () => {
  return (
    <header className="header__container">
      <Link to="/" className="header__link">
        Podcaster
      </Link>
      <LoadingIcon />
    </header>
  );
};

export default Header;
