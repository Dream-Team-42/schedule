import React from "react";
import { useSelector } from "react-redux";
import "./assets/css/App.scss";
import Header from "./features/header/Header";
import { selectUser } from "./features/header/headerSlice";
import Lists from "./features/lists/Lists";
import TaskForm from "./features/tasks/taskModal";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="container">
      <Header />
      {user === "Режим ментора" ? <TaskForm /> : ""}
      {/*<TableInfo/>*/}
      <Lists />
    </div>
  );
}

export default App;
