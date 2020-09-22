import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";
import "./assets/css/index.css";
import { getTaskList } from "./features/tasks/taskSlice";
import * as serviceWorker from "./serviceWorker";

store.dispatch(getTaskList());
// setTimeout(() => {
// store.dispatch(rmTask("jC2bG53yG5nctATIDHlb"));
// }, 3000);
// setTimeout(() => {
//   store.dispatch(
//     updateTask({
//       id: "jC2bG53yG5nctATIDHlb",
//       description: "New description",
//     })
//   );
// }, 3000);

// store.dispatch(getTask("jC2bG53yG5nctATIDHlb"));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
