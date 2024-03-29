import { FC, useEffect } from "react";
import { Episode } from "../../types/detailTypes";
import "./episodes-list.style.css";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  episodes: Episode[];
  podcastId: string;
}

export const formatReleaseDate = (releaseDateIsoString: string): string => {
  const releaseDate = new Date(releaseDateIsoString);
  const formattedDate = releaseDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return formattedDate;
};

export const formatDuration = (milliseconds: number): string => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

const EpisodesList: FC<Props> = (props) => {
  const { episodes, podcastId } = props;

  useEffect(() => {
    console.log({ episodes });
  }, [episodes]);

  return (
    <div className="episodes-list__container">
      <div className="episodes-list__counter">
        <h3>Episodes: {episodes.length}</h3>
      </div>
      {/* <div className="episodes-list__table"> */}
      <div className="episodes-list__table-container">
        <div className="episodes-list__table">
          <div className="episodes-list__table-header">Title</div>
          <div className="episodes-list__table-header">Date</div>
          <div className="episodes-list__table-header">Duration</div>

          {episodes.map((episode, index) => (
            <React.Fragment key={episode.trackId}>
              <div
                className={`episodes-list__table-row ${index % 2 === 0 ? "episodes-list__table-row--background" : ""}`}
              >
                <Link className="episodes-list__table-link" to={`/podcast/${podcastId}/episode/${episode.trackId}`}>
                  {episode.trackName}
                </Link>
              </div>
              <div
                className={`episodes-list__table-row ${index % 2 === 0 ? "episodes-list__table-row--background" : ""}`}
              >
                {episode.releaseDate && formatReleaseDate(episode.releaseDate)}
              </div>
              <div
                className={`episodes-list__table-row ${index % 2 === 0 ? "episodes-list__table-row--background" : ""}`}
              >
                {episode.trackTimeMillis && formatDuration(episode.trackTimeMillis)}{" "}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EpisodesList;
