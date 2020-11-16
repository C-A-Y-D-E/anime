import {
  LOG_OUT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_FAIL,
  LOAD_USER_SUCCESS,
  ADD_BOOKMARK_SUCCESS,
  DELETE_BOOKMARK_SUCCESS,
} from "../actions/constants";

const initialValue = {
  isAuth: false,
  loading: false,
  user: {},
  error: null,
};

const Auth = (state = initialValue, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: { ...action.payload.data.data, error: null },
      };
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
      return {
        ...state,
        error: action.error.response.data.message || action.error.message,
        loading: false,
      };

    case LOG_OUT:
      return { loading: false, isAuth: false, user: {}, error: null };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        user:
          action.payload.data.status === "success"
            ? action.payload.data.user
            : {},
        isAuth: action.payload.data.status === "success" ? true : false,
        error: null,
        loading: false,
      };

    case ADD_BOOKMARK_SUCCESS:
      return {
        ...state,
        user: { ...state.user, bookmarks: action.payload.data.data },
      };
    case DELETE_BOOKMARK_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          bookmarks: state.user.bookmarks.filter(
            (bookmark) =>
              bookmark._id !== action.meta.previousAction.payload.animeId
          ),
        },
      };

    default:
      return state;
  }
};

export default Auth;

// const Auth = (state = initialValue, action) => {
//   switch (action.type) {
//     case LOGIN_SUCCESS:
//       return { ...state, isAuth: true, user: { ...action.payload } };
//     case SIGN_UP:
//       return { ...state, isAuth: true, user: { ...action.payload } };
//     case USER_LOADED:
//       return {
//         ...state,
//         user: action.payload.status === "success" ? action.payload.user : {},
//         isAuth: action.payload.status === "success" ? true : false,
//       };
//     case LIKE:
//       return { ...state, likes: [...state.likes, action.payload] };

//     case LIKES_BY_USER:
//       return { ...state, likes: action.payload };
//     case DISLIKE:
//       return {
//         ...state,
//         likes: state.likes.filter((like) => like.anime.id !== action.payload),
//       };
//     case BOOKMARK:
//       return { ...state, bookmarks: [...state.bookmarks, action.payload] };
//     case BOOKMARKS_BY_USER:
//       return { ...state, bookmarks: action.payload };
//     case DELETE_BOOKMARK:
//       return {
//         ...state,
//         bookmarks: state.bookmarks.filter(
//           (bookmark) => bookmark.anime.id !== action.payload
//         ),
//       };
//     case LOG_OUT:
//       return { ...action.payload };

//     case GET_COMMENTS:
//       return {
//         ...state,
//         comments: [action.payload === null ? [] : action.payload],
//       };
//     case ADD_COMMENT:
//       return { ...state, comments: [action.payload, ...state.comments] };
//     case DELETE_COMMENT:
//       return {
//         ...state,
//         comments: state.comments.filter(
//           (comment) => comment._id !== action.payload
//         ),
//       };
//     default:
//       return state;
//   }
// };

// export default Auth;
