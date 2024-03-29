import { FC, useState } from "react";
import { Entry } from "../../types/listTypes";
import "./podcast-card.style.css";
import { Link } from "react-router-dom";

interface Props {
  podcastItem: Entry;
}

const PodcastCard: FC<Props> = (props) => {
  const { podcastItem } = props;
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Link
      to={`/podcast/${podcastItem.id.attributes["im:id"]}`}
      className={`card__container ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="card__rectangle">
        <div className="card__title">{podcastItem["im:name"].label}</div>
        <div className="card__author">Author: {podcastItem["im:artist"].label}</div>
      </div>
      <div className="card__circle">
        <img src={podcastItem["im:image"][2].label} alt="Images" className="card__image" />
      </div>
    </Link>
  );
};

export default PodcastCard;
