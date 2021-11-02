import { LayOut } from "features/common";
import React from "react";
// import {Redirect,Route,Switch} from 'react-router-dom'
import './App.css';
import { BrowserRouter } from 'react-router-dom';


const App= () => {
  return (
    <div className="App">
     <BrowserRouter><LayOut/></BrowserRouter>
    </div>
  );
}

export default App;