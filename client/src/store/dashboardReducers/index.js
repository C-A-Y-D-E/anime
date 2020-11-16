import { combineReducers } from "redux";
import animeReducer from "./animeReducer";
import episodeReducer from "./episodeReducer";
import userReducer from "./userReducer";
const dashboardReducers = combineReducers({
  animes: animeReducer,
  episodes: episodeReducer,
  users: userReducer,
});

export default dashboardReducers;
