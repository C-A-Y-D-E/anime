import {
  GET_ANIMES_SUCCESS,
  GET_ANIMES_FAIL,
  GET_ANIMES_REQUEST,
  GET_ANIME_REQUEST,
  GET_ANIME_SUCCESS,
  GET_ANIME_FAIL,
  GET_POPULARS_REQUEST,
  GET_POPULARS_SUCCESS,
  GET_POPULARS_FAIL,
  GET_BEST_ANIME_REQUEST,
  GET_BEST_ANIME_SUCCESS,
  GET_BEST_ANIME_FAIL,
  GET_RATED_SUCCESS,
  GET_RATED_REQUEST,
  GET_RATED_FAIL,
  ANIME_COMMENTS_REQUEST,
  ANIME_COMMENTS_SUCCESS,
  ANIME_COMMENTS_FAIL,
  SEARCH_SUCCESS,
  SEARCH_LOADING,
  SEARCH_ERROR,
} from "./constants";

export function getAnimes(page = 1) {
  return {
    types: [GET_ANIMES_REQUEST, GET_ANIMES_SUCCESS, GET_ANIMES_FAIL],
    payload: {
      request: {
        url: `/animes?limit=10&page=${page}`,
      },
    },
  };
}
export function searchAnimes(string) {
  return {
    types: [SEARCH_LOADING, SEARCH_SUCCESS, SEARCH_ERROR],
    payload: {
      request: {
        url: `animes/?search=${string}`,
      },
    },
  };
}

export function getAnime(animeId) {
  return {
    types: [GET_ANIME_REQUEST, GET_ANIME_SUCCESS, GET_ANIME_FAIL],
    payload: {
      request: {
        url: `/animes/${animeId}`,
      },
    },
  };
}

export function bestAnimes() {
  return {
    types: [
      GET_BEST_ANIME_REQUEST,
      GET_BEST_ANIME_SUCCESS,
      GET_BEST_ANIME_FAIL,
    ],
    payload: {
      request: {
        url: "/animes/must-watch",
      },
    },
  };
}
export function popularAnimes() {
  return {
    types: [GET_POPULARS_REQUEST, GET_POPULARS_SUCCESS, GET_POPULARS_FAIL],
    payload: {
      request: {
        url: `/animes/popular`,
      },
    },
  };
}

export function ratedAnimes() {
  return {
    types: [GET_RATED_REQUEST, GET_RATED_SUCCESS, GET_RATED_FAIL],
    payload: {
      request: {
        url: `/animes/rated`,
      },
    },
  };
}
export function getAnimeComments(animeId) {
  return {
    types: [
      ANIME_COMMENTS_REQUEST,
      ANIME_COMMENTS_SUCCESS,
      ANIME_COMMENTS_FAIL,
    ],
    payload: {
      request: {
        url: `animes/${animeId}/comments/all`,
      },
    },
  };
}
// export const getAnimes = () => async (dispatch) => {
//   const response = await axios.get("/api/v1/animes");
//   await dispatch({ type: GET_ANIMES, payload: response.data.data });
// };

// export const getAnime = (animeId) => async (dispatch) => {
//   const response = await axios.get(`/api/v1/animes${animeId}`);
//   await dispatch({ type: GET_ANIME, payload: response.data.data });
// };

// export const popularAnimes = () => async (dispatch) => {
//   const response = await axios.get("/api/v1/animes/popular");
//   await dispatch({ type: GET_POPULARS, payload: response.data.data });
// };

// export const ratedAnimes = () => async (dispatch) => {
//   const response = await axios.get("/api/v1/animes/rated");
//   await dispatch({ type: GET_RATED, payload: response.data.data });
// };
