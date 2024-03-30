import { FC, useEffect } from "react";
import { Episode } from "../../types/detailTypes";
import detailMocks from "../../mocks/podcastDetail.json";
interface Props {
  episodes: Episode[];
  episodeId: string;
}

const details = detailMocks.results[0];
const episodesSS = detailMocks.results.splice(1);

const EpisodePlayer: FC<Props> = (props) => {
  const { episodes, episodeId } = props;

  const episode = episodesSS.find((ep: Episode) => ep.trackId.toString() === episodeId);

  useEffect(() => {
    console.log("episodes in player", episodesSS);
  }, [episodesSS]);

  return (
    <div className="episode-page__content">
      <h2 className="episode-page__title">{episode?.trackName}</h2>
      <p className="episode-page__description" dangerouslySetInnerHTML={{ __html: episode?.description as string }}></p>
      <audio className="episode-page__audio" controls>
        <source src={episode?.episodeUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default EpisodePlayer;
