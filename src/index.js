import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";

//react-script-start
// redux
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  addStudent,
  addCampus,
  requestCampuses,
  requestStudents
} from "./reducers/reducer";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  addStudent,
  addCampus,
  requestCampuses,
  requestStudents
});
//addCampus reducer
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
