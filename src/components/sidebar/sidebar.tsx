import { FC } from "react";
import { Link } from "react-router-dom";
import "./sidebar.style.css";
import { useQueryClient } from "@tanstack/react-query";
import { Podcast } from "../../types/listTypes";

interface Props {
  id: number;
  image: string;
  title: string;
  artistName: string;
}

const Sidebar: FC<Props> = (props) => {
  const { id, image, title, artistName } = props;
  const queryClient = useQueryClient();
  const queryKey = ["podcastList"];
  const data = queryClient.getQueryData<Podcast>(queryKey);

  const searchDescription = () => {
    return data?.feed.entry.find((element) => element.id.attributes["im:id"] === id.toString())?.summary.label;
  };

  return (
    <aside className="sidebar__container">
      <Link to={`/podcast/${id}`} className="sidebar__image">
        <img className="podcast-detail__artwork" src={image} alt={title} />
      </Link>

      <hr className="sidebar__line" />

      <div className="sidebar__info">
        <Link to={`/podcast/${id}`} className="sidebar__title" style={{ textDecoration: "none", color: "inherit" }}>
          {title}
        </Link>

        <Link to={`/podcast/${id}`} className="sidebar__author" style={{ textDecoration: "none" }}>
          By: {artistName}
        </Link>

        <hr className="sidebar__line" />

        <header>
          <h4 className="sidebar__header-description">Description:</h4>
        </header>
        <section>
          <p className="sidebar__description">{searchDescription()}</p>
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;
