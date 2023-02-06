import { Route, Routes } from 'react-router-dom'
import React from "react"
import SelectDate from './SelectDate';

function App() {
  //textfield, type date, validate

  return (
    <div>
      <Routes>
        <Route path='' element={ <SelectDate/> }/>
      </Routes>
    </div>
  );
}

export default App;
