import React from "react";
import "../assets/css/App.css";
import "../constants/data";
import Header from "./header/Header";
import Lists from "./lists/Lists";
import TaskForm from "./taskForm/taskForm";

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
