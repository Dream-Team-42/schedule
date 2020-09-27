import React from "react";
import "./assets/css/App.scss";
import Header from "./features/header/Header";
import Lists from "./features/lists/Lists";
import TaskModal from "./features/tasks/taskModal";

function App() {
  return (
    <div className="container">
      <Header />
      <TaskModal />
      {/*<TableInfo/>*/}
      <Lists />
    </div>
  );
}

export default App;
