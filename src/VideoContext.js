import { createContext, useContext, useReducer } from "react";

const VideoContext = createContext();

const reduceFunc = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WATCH_LATER": {
      return { ...state, watchLater: [...state.watchLater, action.payload] };
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
