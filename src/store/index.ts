import { applyMiddleware, createStore } from "redux";
import createReducer from "./reducers";
import { createHashHistory } from 'history'
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";
import { composeWithDevTools } from 'redux-devtools-extension'


export const history = createHashHistory()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  createReducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store