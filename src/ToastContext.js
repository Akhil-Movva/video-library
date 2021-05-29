import { createContext, useContext, useReducer } from "react";

const ToastContext = createContext();

const reduceFunc = (state, action) => {
  switch (action.type) {
    case "TOGGLE_VIDEO_TOAST_VISIBILITY": {
      if (state.videoToastVisibility === "hidden")
        return { ...state, videoToastVisibility: "visible" };

      return { ...state, videoToastVisibility: "hidden" };
    }

    case "TOGGLE_WATCH_LATER_TOAST_VISIBILITY": {
      if (state.watchLaterToastVisibility === "hidden")
        return { ...state, watchLaterToastVisibility: "visible" };

      return { ...state, watchLaterToastVisibility: "hidden" };
    }

    case "TOGGLE_VIDEO_PLAYER_TOAST_VISIBILITY": {
      if (state.videoPlayerToastVisibility === "hidden")
        return { ...state, videoPlayerToastVisibility: "visible" };

      return { ...state, videoPlayerToastVisibility: "hidden" };
    }

    case "TOGGLE_LIKED_VIDEOS_TOAST_VISIBILITY": {
      if (state.likedVideosToastVisibility === "hidden")
        return { ...state, likedVideosToastVisibility: "visible" };

      return { ...state, likedVideosToastVisibility: "hidden" };
    }

    case "SET_VIDEO_TOAST_TEXT": {
      return { ...state, videoToastText: action.payload };
    }

    case "SET_WATCH_LATER_TOAST_TEXT": {
      return { ...state, watchLaterToastText: action.payload };
    }

    case "SET_LIKED_VIDEOS_TOAST_TEXT": {
      return { ...state, likedVideosToastText: action.payload };
    }

    case "SET_VIDEO_PLAYER_TOAST_TEXT": {
      return { ...state, videoPlayerToastText: action.payload };
    }

    default:
      return state;
  }
};

export const ToastProvider = ({ children }) => {
  const [toastState, toastDispatch] = useReducer(reduceFunc, {
    videoToastVisibility: "hidden",
    videoToastText: "",
    watchLaterToastVisibility: "hidden",
    watchLaterToastText: "",
    likedVideosToastVisibility: "hidden",
    likedVideosToastText: "",
    videoPlayerToastVisibility: "hidden",
    videoPlayerToastText: ""
  });
  return (
    <ToastContext.Provider value={{ toastState, toastDispatch }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
