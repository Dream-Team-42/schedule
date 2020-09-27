import React from "react";
import "./assets/css/App.scss";
import Header from "./features/header/Header";
import Main from "./features/main/Main";
import TaskModal from "./features/tasks/taskModal";

function App() {
  return (
    <div className="container">
      <Header />
      <TaskModal />
      <Main />
    </div>
  );
}

export default App;
