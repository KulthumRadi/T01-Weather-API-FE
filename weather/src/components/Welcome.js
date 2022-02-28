import React from 'react'
import './welcome.css';
import { useHistory } from "react-router-dom";

export const Welcome =()=> {
  
  const history = useHistory();
  
  return (
      
    <div class="home">
    <div class="homeText">
      <h2 class="h2_Home">
       Welcome To  - <br />
       Your Weather In Your Pocket
      </h2>
      <p class="pHome" >
        we have made the most advanced, costumazabile and sport theme in the
        world.
      </p>
      <button class="button" 
       onClick={() => {
        history.push("./details");
      }}
      > SEE TODAYS WEATHER 
            </button>
    </div>
  </div>
  )
}

