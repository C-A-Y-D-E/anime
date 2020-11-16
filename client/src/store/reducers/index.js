import { combineReducers } from "redux";
import Animes from "../reducers/Animes";
import Anime from "./Anime";
import Best from "./Best";
import userReducer from "./userReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/";
import likeReducer from "./likeReducer";
import userCommentsReducer from "./userCommentReducer";
import animeCommentReducer from "./animeCommentReducer";
import ErrorReducer from "./ErrorReducer";
let persistConfig = {
  key: "root",
  storage,
  whitelist: ["animes", "best", "userComments", "userBookmarks", "likes"],
};

const rootReducer = combineReducers({
  animes: Animes,
  anime: Anime,
  best: Best,
  user: userReducer,
  likes: likeReducer,
  userComments: userCommentsReducer,
  animeComments: animeCommentReducer,
  error: ErrorReducer,

  // error: ErrorReducer,
});

export default persistReducer(persistConfig, rootReducer);
