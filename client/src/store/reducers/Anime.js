import {
  GET_ANIME_REQUEST,
  GET_ANIME_SUCCESS,
  GET_ANIME_FAIL,
} from "../actions/constants";

const initialStates = {
  result: {},
  loading: false,
  error: {},
};
const Anime = (state = initialStates, action) => {
  switch (action.type) {
    case GET_ANIME_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_ANIME_FAIL:
      return {
        ...state,
        loading: false,
        error: {
          status: action.error.response.data.status,
          message: action.error.response.data.message,
          statusCode: action.error.response.status,
        },
      };
    case GET_ANIME_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.payload.data.data,
        error: null,
      };
    default:
      return state;
  }
};
export default Anime;
