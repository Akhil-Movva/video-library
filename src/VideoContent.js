import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuListBox } from "./MenuListBox";

export const VideoContent = ({ item }) => {
  const [visibililty, setVisibility] = useState("hidden");
  const [listBoxDisplay, setListBoxDisplay] = useState("none");

  const iconStyle = { visibility: visibililty };
  const listBoxStyle = { display: listBoxDisplay };

  return (
    <div
      onMouseOver={() => setVisibility("visible")}
      onMouseLeave={() => setVisibility("hidden")}
      tabIndex="0"
      className="content"
    >
      <Link className="content__link" to={`/video/${item.id}`}>
        <img className="img-responsive" src={item.thumbnail} alt="video" />
      </Link>
      <div className="content__details">
        <Link className="content__link" to={`/video/${item.id}`}>
          <div className="content__details__title">{item.title}</div>
        </Link>
        <MenuListBox video={item} listBoxStyle={listBoxStyle} />
        <button
          onClick={() => {
            if (listBoxDisplay === "block") {
              setListBoxDisplay("none");
            } else {
              setListBoxDisplay("block");
            }
          }}
          className="content__details__menu-button"
        >
          <i style={iconStyle} className="fas fa-ellipsis-v"></i>
        </button>
      </div>
    </div>
  );
};
