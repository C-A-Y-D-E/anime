import {
  GET_BEST_ANIME_FAIL,
  GET_BEST_ANIME_REQUEST,
  GET_BEST_ANIME_SUCCESS,
} from "../actions/constants.js";

const initialStates = {
  results: [],
  loading: false,
  error: null,
};
const Best = (state = initialStates, action) => {
  switch (action.type) {
    case GET_BEST_ANIME_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_BEST_ANIME_FAIL:
      return { ...state, loading: false, error: action.error.message };
    case GET_BEST_ANIME_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload.data.data,
        error: null,
      };

    default:
      return state;
  }
};
export default Best;
