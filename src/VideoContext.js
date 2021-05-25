import { createContext, useContext, useReducer } from "react";
import { videos } from "./db";

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

    case "TOGGLE_LIKE_VIDEO": {
      const video = action.payload;
      const videoList = state.videoList;
      const videoArr = videoList.map((item) => {
        if (item.id === video.id) {
          return { ...item, isLiked: !item.isLiked };
        } else return item;
      });

      if (!video.isLiked) {
        return {
          ...state,
          videoList: videoArr,
          likedVideos: [...state.likedVideos, video]
        };
      } else {
        const likedList = state.likedVideos;
        const likedArr = likedList.filter((item) => item.id !== video.id);
        return { ...state, videoList: videoArr, likedVideos: likedArr };
      }
    }

    default:
      return state;
  }
};

export const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduceFunc, {
    videoList: videos,
    watchLater: [],
    likedVideos: []
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
