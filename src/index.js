import React from "react";
import ReactDOM from "react-dom";
import App from "./route/root";

import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";

import "./index.scss";
import "antd/dist/antd.css";

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(logger, thunk))
);

const root = document.getElementById("root");

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	root
);
