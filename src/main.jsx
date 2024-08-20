import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, combineReducers } from "redux";
import { taskReducer, addTask } from "./reducers.jsx";
import App from "./App.jsx";
import "./index.css";

const rootReducer = combineReducers({
  taskReducer: taskReducer,
  addTask: addTask,
});
const store = createStore(rootReducer);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
