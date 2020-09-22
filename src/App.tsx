import React from "react";
import "./assets/css/App.css";
import Header from "./features/header/Header";
import Lists from "./features/lists/Lists";
import TaskForm from "./features/tasks/taskForm";

function App() {
  return (
    <div className="container">
      <Header />
      <TaskForm />
      {/*<TableInfo/>*/}
      <Lists />
    </div>
  );
}

export default App;
