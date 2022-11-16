import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import testReducer from "./test.reducer";

const createRootReducer = (history: History) => combineReducers({
  test: testReducer,
  router: connectRouter(history)
})

export default createRootReducer