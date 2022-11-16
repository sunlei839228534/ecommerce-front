import { applyMiddleware, createStore } from "redux";
import createReducer from "./reducers";
import { createHashHistory } from 'history'
import { routerMiddleware } from "connected-react-router";

export const history = createHashHistory()

const store = createStore(
  createReducer(history),
  applyMiddleware(routerMiddleware(history))
)

export default store