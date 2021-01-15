import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import { persistStore } from "redux-persist";
import {
  cacheAdapterEnhancer,
  throttleAdapterEnhancer,
} from "axios-extensions";
import rootReducer from "./reducers";
import dashboardReducers from "./dashboardReducers";

const client = axios.create({
  baseURL: "/api/v1",
  responseType: "json",
  adapter: throttleAdapterEnhancer(
    cacheAdapterEnhancer(axios.defaults.adapter)
  ),
});

const middleware = [thunk, axiosMiddleware(client)];
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  withDevTools(applyMiddleware(...middleware))
);

export const adminStore = createStore(
  dashboardReducers,
  withDevTools(applyMiddleware(...middleware))
);
export const persistor = persistStore(store); // this is persistant version of our store
export default { store, persistor };
