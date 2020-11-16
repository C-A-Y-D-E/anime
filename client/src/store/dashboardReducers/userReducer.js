import {
  ALL_USERS_SUCCESS,
  UPDATE_USER,
  DELETE_USER,
} from "../actions/dashboardConstants";
import { SIGNUP_SUCCESS } from "../actions/constants";

const initialStates = {
  results: [],
};
const userReducer = (state = initialStates, action) => {
  switch (action.type) {
    case ALL_USERS_SUCCESS:
      return { ...state, results: action.payload.data.users };
    case UPDATE_USER:
      let updatedIndex = state.results.findIndex(
        (user) => user._id === action.payload.data.data._id
      );
      state.results[updatedIndex] = action.payload.data.data;
      return { ...state };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        results: [...state.results, action.payload.data.data],
      };
    case DELETE_USER:
      return {
        ...state,
        results: state.results.filter(
          (user) => user._id !== action.meta.previousAction.payload.userId
        ),
      };
    default:
      return state;
  }
};
export default userReducer;
