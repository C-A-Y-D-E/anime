import { ERROR, REQUEST } from "../actions/constants";
const initialState = {
  message: null,
};
const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return { ...state, message: null };
    case ERROR:
      return { ...state, message: action.error.response.data.message };
    default:
      return state;
  }
};
export default ErrorReducer;
