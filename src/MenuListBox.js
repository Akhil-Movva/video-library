import { useVideo } from "./VideoContext";

export const MenuListBox = ({ video, listBoxStyle }) => {
  const { dispatch } = useVideo();

  return (
    <div style={listBoxStyle} className="menu-listbox">
      <div
        onClick={() => {
          dispatch({ type: "ADD_TO_WATCH_LATER", payload: video });
        }}
        className="menu-listbox__item"
      >
        <i className="icon fas fa-clock"></i>Save to Watch later
      </div>
      <div className="menu-listbox__item">
        <i className="icon fas fa-list-ul"></i>Save to playlist
      </div>
    </div>
  );
};
