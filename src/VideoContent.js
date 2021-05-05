import { useState } from "react";
import { Link } from "react-router-dom";

export const VideoContent = ({ item }) => {
  const [display, setDisplay] = useState("none");

  const iconStyle = { display: display };

  return (
    <div
      onMouseOver={() => setDisplay("inherit")}
      onMouseLeave={() => setDisplay("none")}
      tabIndex="0"
      key={item.id}
      className="content"
    >
      <Link className="content__link" to={`/video/${item.id}`}>
        <img className="img-responsive" src={item.thumbnail} alt="video" />
      </Link>
      <div className="content__details">
        <Link className="content__link" to={`/video/${item.id}`}>
          <div className="content__details__title">{item.title}</div>
        </Link>
        <button className="content__details__button">
          <i style={iconStyle} className="fas fa-ellipsis-v"></i>
        </button>
      </div>
    </div>
  );
};
