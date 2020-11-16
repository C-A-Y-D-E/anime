import {
  DASHBOARD_LOADING,
  ALL_USERS_SUCCESS,
  DASHBOARD_ERROR,
  ALL_ANIMES_SUCCESS,
  ADD_ANIME_SUCCESS,
  UPDATE_ANIME_SUCCESS,
  DELETE_ANIME_SUCCESS,
  ANIME_EPISODES,
  ANIME_EPISODES_UPDATE,
  ANIME_EPISODES_ADD,
  ANIME_EPISODES_DELETE,
  UPDATE_USER,
  DELETE_USER,
} from "./dashboardConstants";

//ANIMES
export function getAnimes() {
  return {
    types: [DASHBOARD_LOADING, ALL_ANIMES_SUCCESS, DASHBOARD_ERROR],
    payload: {
      request: {
        url: "/animes",
      },
    },
  };
}

export function addAnime(values) {
  return {
    types: [DASHBOARD_LOADING, ADD_ANIME_SUCCESS, DASHBOARD_ERROR],
    payload: {
      request: {
        method: "POST",
        url: "/animes",
        data: values,
      },
    },
  };
}

export function updateAnime(animeId, values) {
  return {
    types: [DASHBOARD_LOADING, UPDATE_ANIME_SUCCESS, DASHBOARD_ERROR],
    payload: {
      request: {
        method: "PATCH",
        url: `animes/${animeId}`,
        data: values,
      },
    },
  };
}
export function deleteAnime(animeId) {
  return {
    types: [DASHBOARD_LOADING, DELETE_ANIME_SUCCESS, DASHBOARD_ERROR],
    payload: {
      request: {
        method: "DELETE",
        url: `animes/${animeId}`,
      },
      animeId,
    },
  };
}

//EPISODE
export function getEpisodes(animeId) {
  return {
    types: [DASHBOARD_LOADING, ANIME_EPISODES, DASHBOARD_ERROR],
    payload: {
      request: {
        url: `/animes/${animeId}/episodes`,
      },
    },
  };
}

export function updateEpisode(episodeId, values) {
  return {
    types: [DASHBOARD_LOADING, ANIME_EPISODES_UPDATE, DASHBOARD_ERROR],
    payload: {
      request: {
        method: "PATCH",
        url: `/episodes/${episodeId}`,
        data: values,
      },
    },
  };
}

export function postEpisode(animeId, values) {
  return {
    types: [DASHBOARD_LOADING, ANIME_EPISODES_ADD, DASHBOARD_ERROR],
    payload: {
      request: {
        method: "POST",
        url: `/animes/${animeId}/episodes`,
        data: values,
      },
    },
  };
}

export function deleteEpisode(episodeId) {
  return {
    types: [DASHBOARD_LOADING, ANIME_EPISODES_DELETE, DASHBOARD_ERROR],
    payload: {
      request: {
        method: "DELETE",
        url: `/episodes/${episodeId}`,
      },
      episodeId,
    },
  };
}
//USERS
export function getAllUsers() {
  return {
    types: [DASHBOARD_LOADING, ALL_USERS_SUCCESS, DASHBOARD_ERROR],
    payload: {
      request: {
        url: "/users",
      },
    },
  };
}
export function updateUser(userId, values) {
  return {
    types: [DASHBOARD_LOADING, UPDATE_USER, DASHBOARD_ERROR],
    payload: {
      request: {
        method: "PATCH",
        url: `/users/${userId}`,
        data: values,
      },
    },
  };
}

export function deleteUser(userId) {
  return {
    types: [DASHBOARD_LOADING, DELETE_USER, DASHBOARD_ERROR],
    payload: {
      request: {
        method: "DELETE",
        url: `/users/${userId}`,
      },
      userId,
    },
  };
}
