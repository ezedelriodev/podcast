import { FC } from "react";
import { Entry } from "../../types/types";
import "./podcast-card.style.css";

type Props = {
  podcastItem: Entry;
};

const PodcastCard: FC<Props> = (props) => {
  const { podcastItem } = props;

  return (
    <div className="card__container">
      <div className="card__rectangle">
        <div className="card__title">{podcastItem["im:name"].label}</div>
        <div className="card__author">Author: {podcastItem["im:artist"].label}</div>
      </div>
      <div className="card__circle">
        <img src={podcastItem["im:image"][2].label} alt="Images" className="card__image" />
      </div>
    </div>
  );
};

export default PodcastCard;
