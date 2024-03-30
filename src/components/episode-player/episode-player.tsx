import { FC } from "react";
import { Episode } from "../../types/detailTypes";
import episodesMocks from "../../mocks/episodes.json";
import "./episode-player.style.css";
interface Props {
  episodes: Episode[];
  episodeId: string;
}

//TODO: change this
const episodesSS: Episode[] = episodesMocks.results;

const EpisodePlayer: FC<Props> = (props) => {
  const { episodes, episodeId } = props;

  const episode = episodesSS.find((ep: Episode) => ep.trackId.toString() === episodeId);

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
