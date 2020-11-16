import {
  ANIME_EPISODES,
  ANIME_EPISODES_UPDATE,
  ANIME_EPISODES_ADD,
  ANIME_EPISODES_DELETE,
} from "../actions/dashboardConstants";

const initialStates = {
  results: [],
};
const episodeReducer = (state = initialStates, action) => {
  switch (action.type) {
    case ANIME_EPISODES:
      return { ...state, results: action.payload.data.data };
    case ANIME_EPISODES_UPDATE:
      let updatedEpisode = state.results.findIndex(
        (episode) => episode._id === action.payload.data.data._id
      );
      state.results[updatedEpisode] = action.payload.data.data;
      return { ...state };
    case ANIME_EPISODES_ADD:
      return {
        ...state,
        results: [...state.results, action.payload.data.data],
      };
    case ANIME_EPISODES_DELETE:
      return {
        ...state,
        results: state.results.filter(
          (episode) =>
            episode._id !== action.meta.previousAction.payload.episodeId
        ),
      };

    default:
      return state;
  }
};
export default episodeReducer;
