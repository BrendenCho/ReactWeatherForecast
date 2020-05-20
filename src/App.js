import React from 'react';
import './App.css';
import FiveDay  from "./FiveDay"



function App() {
  
  const key = process.env.REACT_APP_API_KEY;
  
  return <div id="outer">
    
  <FiveDay zip="91381" apiKey={key}/>
  <br/>
  <FiveDay zip="92602" apiKey={key}/>
  <br/>
  <FiveDay zip="84057" apiKey={key}/>
    </div>
    ;
}

export default App;
