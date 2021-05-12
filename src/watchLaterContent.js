import { useState } from "react";

export const WatchLaterContent = ({ item }) => {
  const [visibililty, setVisibility] = useState("hidden");
  const iconStyle = { visibility: visibililty };

  return (
    <div>
      <div
        onMouseOver={() => setVisibility("visible")}
        onMouseLeave={() => setVisibility("hidden")}
        className="watch-later-content"
        key={item.id}
      >
        <img
          className="watch-later-content__img"
          src={item.thumbnail}
          alt="thumbnail"
        />
        <div style={{ width: "75%", textAlign: "left" }}>{item.title}</div>
        <button className="watch-later-content__menu-button">
          <i style={iconStyle} className="fas fa-ellipsis-v"></i>
        </button>
      </div>
      <hr style={{ margin: "0.5rem 0" }} />
    </div>
  );
};
