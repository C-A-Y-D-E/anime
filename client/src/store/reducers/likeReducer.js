import {
  LIKE_SUCCESS,
  DISLIKE_SUCCESS,
  USER_LIKES_REQUEST,
  USER_LIKES_SUCCESS,
  USER_LIKES_FAIL,
} from "../actions/constants";

const initialStates = {
  results: [],
  loading: false,
  error: null,
};
const likeReducer = (state = initialStates, action) => {
  switch (action.type) {
    case USER_LIKES_REQUEST:
      return { ...state, loading: true, error: null };

    case USER_LIKES_FAIL:
      return { ...state, loading: false, error: action.error.message };

    case LIKE_SUCCESS:
      return {
        ...state,
        results: [...state.results, action.payload.data.data],
      };
    case DISLIKE_SUCCESS:
      return {
        ...state,
        results: state.results.filter(
          (like) => like.anime.id !== action.meta.previousAction.payload.animeId
        ),
      };
    case USER_LIKES_SUCCESS:
      return { ...state, results: action.payload.data.data };

    default:
      return state;
  }
};
export default likeReducer;
