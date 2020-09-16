import React from "react";
import "../assets/css/App.css";

import Header from './header/Header'
import TableInfo from './table/Table'

function App() {
  return (
      <div className='container'>
          <Header/>
          <TableInfo/>
      </div>
  );
}

export default App;
