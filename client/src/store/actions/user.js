import {
  LOG_OUT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LIKE_SUCCESS,
  DISLIKE_SUCCESS,
  USER_LIKES_REQUEST,
  USER_LIKES_SUCCESS,
  USER_LIKES_FAIL,
  USER_COMMENTS_REQUEST,
  USER_COMMENTS_SUCCESS,
  USER_COMMENTS_FAIL,
  DELETE_COMMENT_SUCCESS,
  ADD_COMMENT_SUCCESS,
  UPDATE_COMMENT_SUCCESS,
  REQUEST,
  ERROR,
  USER_BOOKMARKS_FAIL,
  USER_BOOKMARKS_REQUEST,
  USER_BOOKMARKS_SUCCESS,
  DELETE_BOOKMARK_SUCCESS,
  ADD_BOOKMARK_SUCCESS,
} from "./constants";

export function login(formvalues) {
  return {
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL],
    payload: {
      request: {
        method: "POST",
        url: "/users/login",
        data: formvalues,
      },
    },
  };
}
export function signup(formvalues) {
  return {
    types: [SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAIL],
    payload: {
      request: {
        method: "POST",
        url: "/users/signup",
        data: formvalues,
      },
    },
  };
}

export function logout() {
  return {
    types: [null, LOG_OUT, null],
    payload: {
      request: {
        url: "/users/logout",
      },
    },
  };
}

export function loadUser() {
  return {
    types: [LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL],
    payload: {
      request: {
        url: "/authCheck",
      },
    },
  };
}

export function like(animeId) {
  return {
    types: [REQUEST, LIKE_SUCCESS, ERROR],
    payload: {
      request: {
        method: "POST",
        url: `/animes/${animeId}/like`,
      },
    },
  };
}
export function dislike(animeId) {
  return {
    types: [REQUEST, DISLIKE_SUCCESS, ERROR],
    payload: {
      request: {
        method: "DELETE",
        url: `/animes/${animeId}/like`,
      },
      animeId,
    },
  };
}

export function userLikes() {
  return {
    types: [USER_LIKES_REQUEST, USER_LIKES_SUCCESS, USER_LIKES_FAIL],
    payload: {
      request: {
        url: "/like",
      },
    },
  };
}
export function userComments(animeId) {
  return {
    types: [USER_COMMENTS_REQUEST, USER_COMMENTS_SUCCESS, USER_COMMENTS_FAIL],
    payload: {
      request: {
        url: `/animes/${animeId}/comments`,
      },
    },
  };
}

export function addComment(animeId, values) {
  return {
    types: [REQUEST, ADD_COMMENT_SUCCESS, ERROR],
    payload: {
      request: {
        method: "POST",
        url: `/animes/${animeId}/comments`,
        data: values,
      },
    },
  };
}

export function deleteComment(commentId) {
  return {
    types: [REQUEST, DELETE_COMMENT_SUCCESS, ERROR],
    payload: {
      request: {
        method: "DELETE",
        url: `/comments/${commentId}`,
      },
      commentId,
    },
  };
}

export function updateComment(commentId, values) {
  return {
    types: [REQUEST, UPDATE_COMMENT_SUCCESS, ERROR],
    payload: {
      request: {
        method: "PATCH",
        url: `/comments/${commentId}`,
        data: values,
      },
    },
  };
}

export function userBookmarks() {
  return {
    types: [
      USER_BOOKMARKS_REQUEST,
      USER_BOOKMARKS_SUCCESS,
      USER_BOOKMARKS_FAIL,
    ],
    payload: {
      request: {
        url: `/bookmarks`,
      },
    },
  };
}
export function addBookmark(animeId) {
  return {
    types: [REQUEST, ADD_BOOKMARK_SUCCESS, ERROR],
    payload: {
      request: {
        method: "POST",
        url: `animes/${animeId}/bookmarks`,
      },
    },
  };
}

export function deleteBookmark(animeId) {
  console.log("calledd41");
  return {
    types: [REQUEST, DELETE_BOOKMARK_SUCCESS, ERROR],
    payload: {
      request: {
        method: "DELETE",
        url: `animes/${animeId}/bookmarks`,
      },
      animeId,
    },
  };
}

export function updateMe(formvalues) {
  return {
    types: [LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL],
    payload: {
      request: {
        method: "PATCH",
        url: `users/updateme`,
        data: formvalues,
      },
    },
  };
}

// export const updateMe = (formvalues) => async (dispatch) => {
//   try {
//     const response = await axios.patch("/api/v1/users/updateme", formvalues);
//     // dispatch({ type: USER_LOADED, payload: response.data });
//     dispatch({ type: CLEAR_ERRORS });
//   } catch (err) {
//     dispatch({ type: SET_ERRORS, payload: err.response.data });
//   }
// };

//comments

// export const getAllComment = (animeId) => async (dispatch) => {
//   try {
//     const response = await axios.get(`api/v1/animes${animeId}/comments/all`);

//     dispatch({ type: GET_ALL_COMMENTS, payload: response.data.data });
//     dispatch({ type: CLEAR_ERRORS });
//   } catch (err) {
//     dispatch({ type: SET_ERRORS, payload: err.response.data });
//   }
// };

// const userLikes = () => async (dispatch) => {
//   try {
//     const response = await axios.get(`/api/v1/like`);
//     dispatch({ type: LIKES_BY_USER, payload: response.data.data });
//     dispatch({ type: CLEAR_ERRORS });
//   } catch (err) {
//     dispatch({ type: SET_ERRORS, payload: err.response.data });
//   }
// };

// export const bookmark = (animeId) => async (dispatch) => {
//   try {
//     const response = await axios.post(`/api/v1/animes/${animeId}/bookmarks`);
//     dispatch({ type: BOOKMARK, payload: response.data.data });
//   } catch (err) {
//     history.push("/login");
//     dispatch({ type: SET_ERRORS, payload: err.response.data.message });
//   }
// };

// export const deleteBookmark = (animeId) => async (dispatch) => {
//   try {
//     await axios.delete(`/api/v1/animes/${animeId}/bookmarks`);
//     dispatch({ type: DELETE_BOOKMARK, payload: animeId });
//   } catch (err) {
//     dispatch({ type: SET_ERRORS, payload: err.response.data });
//   }
// };

// export const userBookmarks = () => async (dispatch) => {
//   try {
//     const response = await axios.get(`/api/v1/bookmarks`);
//     dispatch({ type: BOOKMARKS_BY_USER, payload: response.data.data });
//     dispatch({ type: CLEAR_ERRORS });
//   } catch (err) {
//     dispatch({ type: SET_ERRORS, payload: err.response.data });
//   }
// };

//Comment

// export const like = (animeId) => async (dispatch) => {
//   try {
//     const response = await axios.post(`/api/v1/animes/${animeId}/like`);

//     dispatch({ type: LIKE, payload: response.data.data });
//   } catch (err) {
//     dispatch({ type: SET_ERRORS, payload: err.response.data.message });
//   }
// };

// export const dislike = (animeId) => async (dispatch) => {
//   try {
//     await axios.delete(`/api/v1/animes/${animeId}/like`);
//     dispatch({ type: DISLIKE, payload: animeId });
//   } catch (err) {
//     dispatch({ type: SET_ERRORS, payload: err.response.data });
//   }
// };

// export const loadUser = () => async (dispatch) => {
//   try {
//     const response = await axios.get("/api/v1/authCheck");
//     dispatch({ type: USER_LOADED, payload: response.data });
//     if (response.data.status === "success") {
//       dispatch(userLikes());
//       dispatch(userBookmarks());
//       localStorage.setItem("user", true);
//     }
//     dispatch({ type: CLEAR_ERRORS });
//   } catch (err) {
//     dispatch({ type: SET_ERRORS, payload: err.response.data });
//   }
// };

// export const logout = () => async (dispatch) => {
//   const response = await axios.get("/api/v1/users/logout");
//   localStorage.setItem("user", false);
//   history.push("/");
//   dispatch({ type: LOG_OUT, payload: response.data.data });
// };
// export const signup = (formValues) => async (dispatch) => {
//   try {
//     const response = await axios.post("/api/v1/users/signup", formValues);
//     // dispatch({ type: SIGN_UP, payload: response.data.data });
//     dispatch(userLikes(response.data.data._id));
//     localStorage.setItem("user", true);
//     dispatch({ type: CLEAR_ERRORS });
//   } catch (err) {
//     dispatch({ type: SET_ERRORS, payload: err.response.data });
//   }
// };

// export const login = (formValues) => async (dispatch) => {
//   try {
//     const response = await axios.post("/api/v1/users/login", formValues);
//     dispatch({ type: LOG_IN, payload: response.data.data });
//     dispatch(userLikes(response.data.data._id));
//     localStorage.setItem("user", true);
//     history.push("/");
//     dispatch({ type: CLEAR_ERRORS });
//   } catch (err) {
//     dispatch({ type: SET_ERRORS, payload: err.response.data });
//   }
// };

// export const getUserComment = (animeId) => async (dispatch) => {
//   try {
//     const response = await axios.get(`api/v1/animes${animeId}/comments/`);

//     dispatch({ type: GET_COMMENTS, payload: response.data.data });
//     dispatch({ type: CLEAR_ERRORS });
//   } catch (err) {
//     dispatch({ type: SET_ERRORS, payload: err.response.data });
//   }
// };
// export const addComment = (animeId, values) => async (dispatch) => {
//   try {
//     const response = await axios.post(
//       `api/v1/animes${animeId}/comments`,
//       values
//     );
//     dispatch({ type: ADD_COMMENT, payload: response.data.data });
//   } catch (err) {
//     dispatch({ type: SET_ERRORS, payload: err.response.data });
//   }
// };
// export const deleteComment = (commentId) => async (dispatch) => {
//   try {
//     await axios.delete(`/api/v1/comments/${commentId}`);

//     dispatch({ type: DELETE_COMMENT, payload: commentId });
//   } catch (err) {
//     dispatch({ type: SET_ERRORS, payload: err.response.data });
//   }
// };
// export const updateComment = (commentId, values) => async (dispatch) => {
//   try {
//     const response = await axios.patch(`/api/v1/comments/${commentId}`, values);

//     dispatch({ type: UPDATE_COMMENT, payload: response.data.data });
//   } catch (err) {
//     dispatch({ type: SET_ERRORS, payload: err.response.data });
//   }
// };
