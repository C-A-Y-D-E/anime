import {
  ALL_ANIMES_SUCCESS,
  ADD_ANIME_SUCCESS,
  UPDATE_ANIME_SUCCESS,
  DELETE_ANIME_SUCCESS,
} from "../actions/dashboardConstants";
import { SEARCH_SUCCESS } from "../actions/constants";
const initialStates = {
  results: [],
};
const animeReducer = (state = initialStates, action) => {
  switch (action.type) {
    case ALL_ANIMES_SUCCESS:
      return { ...state, results: action.payload.data.data };

    case SEARCH_SUCCESS:
      return { ...state, results: action.payload.data.data };

    case ADD_ANIME_SUCCESS:
      return {
        ...state,
        results: [...state.results, action.payload.data.data],
      };
    case UPDATE_ANIME_SUCCESS:
      let updateIndex = state.results.findIndex(
        (anime) => anime._id === action.payload.data.data._id
      );
      state.results[updateIndex] = action.payload.data.data;
      return { ...state };

    case DELETE_ANIME_SUCCESS:
      return {
        ...state,
        results: state.results.filter(
          (anime) => anime._id !== action.meta.previousAction.payload.animeId
        ),
      };
    default:
      return state;
  }
};
export default animeReducer;
