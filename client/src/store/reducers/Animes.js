import {
  GET_ANIMES_FAIL,
  GET_ANIMES_REQUEST,
  GET_ANIMES_SUCCESS,
  GET_POPULARS_SUCCESS,
  GET_POPULARS_REQUEST,
  GET_RATED_REQUEST,
  GET_RATED_SUCCESS,
  GET_RATED_FAIL,
  GET_POPULARS_FAIL,
  SEARCH_SUCCESS,
} from "../actions/constants";

const initialStates = {
  results: [],
  loading: false,
  error: null,
  search: [],
};

const Animes = (state = initialStates, action) => {
  switch (action.type) {
    // REQUEST for animes
    case GET_ANIMES_REQUEST:
    case GET_POPULARS_REQUEST:
    case GET_RATED_REQUEST:
      return { ...state, loading: true, error: null };
    //SUCCESS for animes
    case GET_ANIMES_SUCCESS:
    case GET_POPULARS_SUCCESS:
    case GET_RATED_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload.data.data,
        error: null,
      };
    //FAIL for animes
    case GET_ANIMES_FAIL:
    case GET_RATED_FAIL:
    case GET_POPULARS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    case SEARCH_SUCCESS:
      return { ...state, search: action.payload.data.data };
    default:
      return state;
  }
};

export default Animes;
