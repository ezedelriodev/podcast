import { Link } from "react-router-dom";
import "./header.style.css";

const Header = () => {
  return (
    <header className="header__container">
      <Link to="/" className="header__link">
        Podcaster
      </Link>
    </header>
  );
};

export default Header;
