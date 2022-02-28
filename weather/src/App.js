import React , { useState } from "react";
import './App.css';
import { Welcome} from "./components/Welcome";
import { Details} from "./components/Details";
import { Route, Switch } from "react-router-dom"; 
import { axios } from "axios";
function App() {
  return (

    <div className="App">
         <Switch>
  
  
         <Route exact path="/" component={Welcome}/>
   <Route exact path="/details" component={Details} />
   </Switch>
    </div>

   
  );
}

export default App;
