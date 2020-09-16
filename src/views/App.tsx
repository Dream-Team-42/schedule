import React from "react";
import "../assets/css/App.css";

import Header from './header/Header'
import TableInfo from './table/Table'
import Lists from "./lists/Lists";

function App() {
  return (
      <div className='container'>
          <Header/>
          {/*<TableInfo/>*/}
          <Lists/>
      </div>
  );
}

export default App;
