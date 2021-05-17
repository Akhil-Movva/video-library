export const videoContentMenuItemData = [
  {
    iconClass: "icon fas fa-clock",
    itemName: "Save to Watch later",
    videoAction: "ADD_TO_WATCH_LATER",
    toastText: "Saved to Watch later",
    toggleAction: "TOGGLE_VIDEO_TOAST_VISIBILITY",
    setTextAction: "SET_VIDEO_TOAST_TEXT"
  },
  {
    iconClass: "icon fas fa-list-ul",
    itemName: "Save to playlist",
    videoAction: "SAVE_TO_PLAYLIST",
    toastText: "Saved to Play list",
    toggleAction: "TOGGLE_VIDEO_TOAST_VISIBILITY",
    setTextAction: "SET_VIDEO_TOAST_TEXT"
  }
];

export const watchLaterContentMenuItemData = [
  {
    iconClass: "icon fas fa-trash",
    itemName: "Remove from Watch later",
    videoAction: "REMOVE_FROM_WATCH_LATER",
    toastText: "Removed from Watch later",
    toggleAction: "TOGGLE_WATCH_LATER_TOAST_VISIBILITY",
    setTextAction: "SET_WATCH_LATER_TOAST_TEXT"
  },
  {
    iconClass: "icon fas fa-list-ul",
    itemName: "Save to playlist",
    videoAction: "SAVE_TO_PLAYLIST",
    toastText: "Saved to Play list",
    toggleAction: "TOGGLE_WATCH_LATER_TOAST_VISIBILITY",
    setTextAction: "SET_WATCH_LATER_TOAST_TEXT"
  }
];
