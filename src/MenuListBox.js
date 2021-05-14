import { MenuListItem } from "./MenuListItem";

export const MenuListBox = ({ video, listBoxStyle, items }) => {
  return (
    <div style={listBoxStyle} className="menu-listbox">
      {items.map((item) => (
        <MenuListItem video={video} item={item} />
      ))}
    </div>
  );
};
