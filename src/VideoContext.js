import { createContext, useContext, useReducer } from "react";

const VideoContext = createContext();

const reduceFunc = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WATCH_LATER": {
      let flag = false;
      const video = action.payload;
      for (const item of state.watchLater) {
        if (item.id === video.id) {
          flag = true;
          break;
        }
      }
      if (flag) return state;

      return { ...state, watchLater: [...state.watchLater, action.payload] };
    }

    case "REMOVE_FROM_WATCH_LATER": {
      const video = action.payload;
      const watchLaterVideos = state.watchLater;
      const arr = watchLaterVideos.filter((item) => item.id !== video.id);
      return { ...state, watchLater: arr };
    }

    default:
      return state;
  }
};

export const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduceFunc, {
    watchLater: []
  });
  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  return useContext(VideoContext);
};
