import {
  ANIME_COMMENTS_REQUEST,
  ANIME_COMMENTS_SUCCESS,
  ADD_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  UPDATE_COMMENT_SUCCESS,
} from "../actions/constants";

const initialStates = {
  loading: false,
  error: null,
  results: [],
};
const animeCommentReducer = (state = initialStates, action) => {
  switch (action.type) {
    case ANIME_COMMENTS_REQUEST:
      return { ...state, loading: true, error: null };
    case ANIME_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        results:
          action.payload.data.data === null
            ? []
            : [...action.payload.data.data],
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        results: [action.payload.data.data, ...state.results],
        loading: false,
        error: null,
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        results: state.results.filter(
          (comment) =>
            comment._id !== action.meta.previousAction.payload.commentId
        ),
        loading: false,
        error: null,
      };
    case UPDATE_COMMENT_SUCCESS:
      const updatedCommentIndex = state.results.findIndex(
        (comment) => comment._id === action.payload.data.data._id
      );
      state.results[updatedCommentIndex] = action.payload.data.data;
      return { ...state };
    default:
      return state;
  }
};

export default animeCommentReducer;
