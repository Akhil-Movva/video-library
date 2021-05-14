import { useVideo } from "./VideoContext";

export const MenuListItem = ({
  video,
  item: { iconClass, actionType, itemName }
}) => {
  const { dispatch } = useVideo();

  return (
    <div
      onClick={() => {
        dispatch({ type: actionType, payload: video });
      }}
      className="menu-listbox__item"
    >
      <i className={iconClass}></i>
      {itemName}
    </div>
  );
};
