import "./podcast-card.style.css";
const PodcastCard = () => {
  const image =
    "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png";
  return (
    <div className="card__container">
      <div className="card__rectangle">
        <div className="card__title">ALL SONG CONSIDERER</div>
        <div className="card__author">Author: Song Explorer</div>
      </div>
      <div className="card__circle">
        <img src={image} alt="Images" className="card__image" />
      </div>
    </div>
  );
};

export default PodcastCard;
