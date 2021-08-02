import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import pomodoroReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
	pomodoroReducer,
	composeWithDevTools(applyMiddleware(logger)),
);

export default store;
