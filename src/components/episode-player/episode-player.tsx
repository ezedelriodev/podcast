import { FC } from "react";
import { Episode } from "../../types/detailTypes";
import "./episode-player.style.css";
interface Props {
  episodes: Episode[];
  episodeId: string;
}

const EpisodePlayer: FC<Props> = (props) => {
  const { episodeId, episodes } = props;

  const episode = episodes.find((ep: Episode) => ep.trackId.toString() === episodeId);

  return (
    <div className="episode-player__container">
      <h2 className="episode-player__title">{episode?.trackName}</h2>
      <p className="episode-player__description" dangerouslySetInnerHTML={{ __html: episode?.description as string }} />
      <audio className="episode-player__audio" controls src={episode?.episodeUrl}>
        Your browser does not support the <code>audio</code> element.
      </audio>
    </div>
  );
};

export default EpisodePlayer;
